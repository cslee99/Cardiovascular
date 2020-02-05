from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Item
from .serializers import ItemSerializer


class ItemViewSet(viewsets.ModelViewSet):
    """
    아이템 API
    """
    queryset = Item.objects.all().order_by('id')
    serializer_class = ItemSerializer