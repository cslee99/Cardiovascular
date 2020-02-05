from rest_framework import serializers

from report.models import Report
from group.models import Group
from question.models import Question
from element.models import Element
from item.models import Item

from item.serializers import ItemSerializer

class ReportSerializer(serializers.ModelSerializer):

    # items로 이름 바꾸기
    items = serializers.SerializerMethodField(source='report__item')

    class Meta:
        model = Report
        fields = '__all__'

    def get_items(self, obj):

        report = None

        if self.context.get('request') and self.context.get('request').method == "PUT":
            group_id = self.context.get('request').data.get('group')
            report = obj.report.filter(group__number=group_id)
        # elif self.context.get('request') and self.context.get('request').method == "GET":
        #     report = obj.report.filter(question__number=1)
        else:
            report = obj.report.filter(question__number=1)

        context = {}
        if report is not None:
            for i in report:
                context[i.element.title] = i.content

        return context

    def create(self, validated_data):
        items = self.context.get('request').data.get('items')
        report = Report.objects.create()

        report.A = bool(self.context.get('request').data.get('A', False))
        report.E = bool(self.context.get('request').data.get('E', False))
        report.P = bool(self.context.get('request').data.get('P', False))
        report.L = bool(self.context.get('request').data.get('L', False))
        report.T = bool(self.context.get('request').data.get('T', False))
        report.M = bool(self.context.get('request').data.get('M', False))

        report.save()

        group = Group.objects.all()

        for g in group:
            question = g.question.all()
            for q in question:
                element = q.element.all()
                for e in element:
                    item = Item.objects.create(report=report, group=g, question=q, element=e)
                    if items and str(item.element.number) in items:
                        item.content = items[str(item.element.number)]
                        item.save()

        return report

    def update(self, instance, validated_data):

        # NOTE 각 그룹 업데이트 시 Check 표시가 반영되도록 업데이트
        instance.A = bool(self.context.get('request').data.get('A', instance.A))
        instance.E = bool(self.context.get('request').data.get('E', instance.E))
        instance.P = bool(self.context.get('request').data.get('P', instance.P))
        instance.L = bool(self.context.get('request').data.get('L', instance.L))
        instance.T = bool(self.context.get('request').data.get('T', instance.T))
        instance.M = bool(self.context.get('request').data.get('M', instance.M))
        instance.save()

        items = self.context.get('request').data.get('items')

        for key, value in items.items():
            report_item = instance.report.get(element__number=key)
            report_item.content = value
            # TODO bulk update!
            report_item.save()

        return instance


# class ReportItemSerializer(serializers.ModelSerializer):

#     number = serializers.SerializerMethodField(source='element__number')

#     class Meta:
#         model = Item
#         fields = [
#             'number',
#             'content'
#         ]

#     def get_number(self, obj):
#         return obj.element.number


# class ReportDetailSerializer(serializers.ModelSerializer):

#     # report = ReportItemSerializer(many=True, read_only=True)
#     number = serializers.SerializerMethodField(source='element__number')

#     class Meta:
#         model = Item
#         fields = ['number', 'content']

#     def get_number(self, obj):
#         return obj.element.number