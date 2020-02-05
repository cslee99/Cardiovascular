from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.views.generic import View

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination

from .models import Report
from question.models import Question
from item.models import Item
from element.models import Element
from group.models import Group

from .serializers import ReportSerializer # ReportDetailSerializer
import json
import io
import xlsxwriter

class ReportListPagination(PageNumberPagination):

    # 동적 페이지 사이즈
    # offset query params를 통해 크기 결정
    page_size_query_param = 'offset'

    # 커스텀 페이지네이션 Response
    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count, # count
            'page': self.page.number - 1, # 현재 페이지
            'results': data # 데이터
        })

class ReportViewSet(viewsets.ModelViewSet):
    """
    레포트 API
    """
    queryset = Report.objects.all().order_by('-id')
    serializer_class = ReportSerializer
    pagination_class = ReportListPagination

    def retrieve(self, request, pk=None):

        try:
            items = Item.objects.select_related('report').filter(report__id=pk, content__isnull=False)
        except Report.DoesNotExist:
            return Response({"message": "레포트가 존재하지 않습니다."}, status=404)

        # serializer = ReportDetailSerializer(instance=items, many=True)

        context = {}
        for item in items:
            if item.content in "True":
                context[item.element.number]= True
            elif item.content in "False":
                context[item.element.number]= False
            else:
                context[item.element.number] = item.content

        return Response(json.dumps(context), status=200)

def set_column_width(worksheet, first_col, last_col, width):

    worksheet.set_column(first_col, last_col, width)


class DownloadReport(APIView):

    def get(self, request):


        output = io.BytesIO()

        workbook = xlsxwriter.Workbook(output, {'strings_to_numbers':  True, 'default_date_format': 'dd-mm-yy'})

        # 포맷 관련
        header = workbook.add_format({'bold': True, 'align': 'center'})

        # 워크 시트 관련
        ADMISSION_DATA = workbook.add_worksheet(name='Admission Data')
        EVENT = workbook.add_worksheet(name='Event')
        PCI = workbook.add_worksheet(name='PCI')
        LAB = workbook.add_worksheet(name='Lab')

        set_column_width(ADMISSION_DATA, 0, 200, 20)
        set_column_width(EVENT, 0, 200, 20)
        set_column_width(PCI, 0, 200, 20)
        set_column_width(LAB, 0, 200, 20)

        # 데이터
        reportIds = list(map(int, request.GET.getlist('reportIds')))
        reports = Report.objects.filter(id__in=reportIds)

        groups = Group.objects.all()

        ADMISSION_DATA_COLUMN = 0
        EVENT_COLUMN = 0
        PCI_COLUMN = 0
        LAB_COLUMN = 0

        for group in groups:
            questions = group.question.all()

            # TODO Question 엑셀에 표시해주기
            # TODO merge_range(first_row, first_col, last_row, last_col, data[, cell_format])
            # TODO merge_range를 통한 데이터 셀 통합 후 표시해주기.

            for question in questions:
                elements = question.element.all()


                for element in elements:
                    if group.number == 1:
                        ADMISSION_DATA.write(0, ADMISSION_DATA_COLUMN, element.title, header)
                        ADMISSION_DATA_COLUMN += 1
                    elif group.number == 2:
                        EVENT.write(0, EVENT_COLUMN, element.title, header)
                        EVENT_COLUMN += 1
                    elif group.number == 3:
                        PCI.write(0, PCI_COLUMN, element.title, header)
                        PCI_COLUMN += 1
                    elif group.number == 4:
                        LAB.write(0, LAB_COLUMN, element.title, header)
                        LAB_COLUMN += 1


        row_num = 1
        col_num = 0

        for report in reports[::-1]:
            item = report.report.all()

            group1_items = item.filter(group__number=1)
            group2_items = item.filter(group__number=2)
            group3_items = item.filter(group__number=3)

            for item in group1_items:
                ADMISSION_DATA.write(row_num, col_num, item.content)
                col_num += 1

            col_num = 0

            for item in group2_items:
                EVENT.write(row_num, col_num, item.content)
                col_num += 1

            col_num = 0
            row_num += 1

        workbook.close()

        output.seek(0)

        filename = 'django_simple.xlsx'
        response = HttpResponse(
            output,
            content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        )
        response['Content-Disposition'] = 'attachment; filename=%s' % filename

        return response