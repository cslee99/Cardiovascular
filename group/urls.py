from .views import GroupViewSet
# from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import (
    ExtendedDefaultRouter as DefaultRouter
)

router = DefaultRouter()

router.register(r'', GroupViewSet, basename='group')
urlpatterns = router.urls