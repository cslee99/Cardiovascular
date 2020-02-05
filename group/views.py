from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework_extensions.mixins import DetailSerializerMixin

from .models import Group
from .serializers import GroupSerializer, GroupDetailSerializer


class GroupViewSet(DetailSerializerMixin, viewsets.ModelViewSet):
    """
    그룹 API
    """
    serializer_class = GroupSerializer
    serializer_detail_class = GroupDetailSerializer
    queryset = Group.objects.all()


# TODO ADD /group/{group_number}/element/
# class GroupElementViewSet(viewsets.ModelViewSet):
