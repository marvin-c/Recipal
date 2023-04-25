from rest_framework import routers
from .views import RecipeViewSet, CategoryViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]