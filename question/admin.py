from django.contrib import admin
from .models import Question
from element.models import Element

class ElementInline(admin.TabularInline):
    model = Element

class QuestionAdmin(admin.ModelAdmin):

    inlines = [
        ElementInline
    ]
    list_display = ['title', 'number']

admin.site.register(Question, QuestionAdmin)