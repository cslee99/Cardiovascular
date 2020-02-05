from django.db import models
from question.models import Question

class Element(models.Model):

    """
        질문의 요소만 관리
    """

    title = models.CharField("요소명", max_length=255, null=True, blank=True)
    number = models.IntegerField("요소번호", null=True, blank=True)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, null=True, blank=True, related_name="element")
    description = models.CharField("요소별칭", max_length=255, null=True, blank=True)

    class Meta:
        ordering = ['question__number', 'number']
    def __str__(self):
        return self.title

class SubElement(models.Model):

    """
       하위 요소
    """
    title = models.CharField("하위요소명", max_length=255, null=True, blank=True)
    number = models.IntegerField("하위요소번호", null=True, blank=True)
    element = models.ForeignKey(Element, on_delete=models.CASCADE, null=True, blank=True, related_name="subelement")

    def __str__(self):

        return self.title