from .views import QuestionViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', QuestionViewSet, basename='item')
urlpatterns = router.urls