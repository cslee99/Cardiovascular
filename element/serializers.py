from rest_framework import serializers
from .models import Element

class ElementSerializer(serializers.ModelSerializer):

    # TODO : SUB Element
    class Meta:
        model = Element
        fields = '__all__'