from django.db import models
from group.models import Group

class Question(models.Model):

    title = models.CharField('검사제목', max_length=255, null=True, blank=True)
    number = models.IntegerField(null=True, blank=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True, blank=True, related_name='question')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['group__number', 'number']