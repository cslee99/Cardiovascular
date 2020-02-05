from django.contrib import admin
from .models import Report
from item.models import Item
from question.models import Question

class ItemInline(admin.TabularInline):
    model = Item
    extra = 1
    raw_id_fields = ("group", "question", "element", "subelement",)

class ReportAdmin(admin.ModelAdmin):

    inlines = [
        ItemInline,
    ]

    list_display = ('A', 'E', 'P', 'L', 'T', 'M')

admin.site.register(Report, ReportAdmin)
