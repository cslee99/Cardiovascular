from django.db import models

class Report(models.Model):

    # 레포트 완료 표시 플래그
    A = models.BooleanField(null=True, blank=True, default=False)
    E = models.BooleanField(null=True, blank=True, default=False)
    P = models.BooleanField(null=True, blank=True, default=False)
    L = models.BooleanField(null=True, blank=True, default=False)
    T = models.BooleanField(null=True, blank=True, default=False)
    M = models.BooleanField(null=True, blank=True, default=False)

