from rest_framework import serializers
from .models import Question
from element.models import Element, SubElement

class QuestionElementSubElementSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubElement
        fields = '__all__'

class QuestionElementSerializer(serializers.ModelSerializer):

    subelement = QuestionElementSubElementSerializer(many=True, read_only=True)

    class Meta:
        model = Element
        fields = ['title', 'number', 'type', 'subelement']

class QuestionSerializer(serializers.ModelSerializer):

    element = QuestionElementSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['title', 'number', 'element']