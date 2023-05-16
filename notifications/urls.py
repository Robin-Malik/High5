from django.urls import path, include
from rest_framework import routers
from .views import NotifiactionViewSet


router = routers.DefaultRouter()
router.register(r'notifications', NotifiactionViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
