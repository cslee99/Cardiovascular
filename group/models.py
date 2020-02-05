from django.db import models

class Group(models.Model):

    name = models.CharField('그룹이름', max_length=255, null=True, blank=True, default="")
    number = models.IntegerField('그룹번호', null=True, blank=True, default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['number']