from .views import ElementViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ElementViewSet, basename='element')
urlpatterns = router.urls