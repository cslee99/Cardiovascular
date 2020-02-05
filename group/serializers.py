from rest_framework import serializers
from .models import Group

from question.serializers import QuestionSerializer

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

class GroupDetailSerializer(serializers.ModelSerializer):

    question = QuestionSerializer(many=True)
    class Meta:
        model = Group
        fields = ['name', 'number', 'question']