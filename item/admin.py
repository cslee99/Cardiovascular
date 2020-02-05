from django.contrib import admin
from .models import Item

class ItemAdmin(admin.ModelAdmin):
    list_display = ['question', 'element', 'subelement', 'content']

admin.site.register(Item, ItemAdmin)