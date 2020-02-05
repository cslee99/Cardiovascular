from django.contrib import admin
from django.urls import path, include

# static 파일 적용되도록 추가
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('report/', include('report.urls')),
    path('group/', include('group.urls')),
    path('question/', include('question.urls')),
    path('element/', include('element.urls')),
    path('item/', include('item.urls')),
]

# static 파일 적용되도록 추가
urlpatterns += staticfiles_urlpatterns()