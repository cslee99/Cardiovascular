from .views import ReportViewSet, DownloadReport
from rest_framework.routers import DefaultRouter
from django.urls import path


urlpatterns = [
    path('download/', DownloadReport.as_view(), name='download')
]

router = DefaultRouter()
router.register(r'', ReportViewSet, basename='report')

urlpatterns += router.urls
