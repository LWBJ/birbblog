from django.urls import path, include
from dataapis import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'birbsighting', views.BirbSightingViewSet)
router.register(r'species', views.SpeciesViewSet)
router.register(r'location', views.LocationViewSet)

urlpatterns = [
  path('', include(router.urls)),
]