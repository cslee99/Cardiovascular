from django.contrib import admin
from .models import Element, SubElement

class ElementAdmin(admin.ModelAdmin):

    list_display = ['title', 'number', 'question', 'description']

admin.site.register(Element, ElementAdmin)
admin.site.register(SubElement)
