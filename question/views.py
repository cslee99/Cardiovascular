from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Question
from .serializers import QuestionSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    """
    Question API
    """
    queryset = Question.objects.all().order_by('number')
    serializer_class = QuestionSerializer

    def retrieve(self, request, pk):

        # NOTE pk는 Question Number
        q = get_object_or_404(Question, number=pk)
        serializer = QuestionSerializer(q)

        return Response(serializer.data, status=200)