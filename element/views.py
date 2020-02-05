from django.shortcuts import get_object_or_404
from .serializers import ElementSerializer
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Element
class ElementViewSet(viewsets.ModelViewSet):
    """
    아이템 API
    """
    queryset = Element.objects.all().order_by('id')
    serializer_class = ElementSerializer