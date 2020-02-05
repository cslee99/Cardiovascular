from django.db import models
from report.models import Report
from group.models import Group
from question.models import Question
from element.models import Element, SubElement

class Item(models.Model):


    report = models.ForeignKey(Report, on_delete=models.CASCADE, null=True, blank=True, related_name='report')
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True, blank=True, related_name='group')
    question = models.ForeignKey(Question, on_delete=models.CASCADE, null=True, blank=True, related_name='question')
    element = models.ForeignKey(Element, on_delete=models.CASCADE, null=True, blank=True, related_name='element')
    subelement = models.ForeignKey(SubElement, on_delete=models.CASCADE, null=True, blank=True, related_name='subelement')

    # element 만 있으면 element에 해당하는 content이고
    # subelement도 있으면 subelement에 해당하는 content
    content = models.CharField("내용", max_length=255, null=True, blank=True)

    class Meta:
        ordering = ['group__number', 'question__number', 'element__number', 'subelement__number']

    def __str__(self):
        return "Q: " + self.question.title + " | " + "E: " +self.element.title