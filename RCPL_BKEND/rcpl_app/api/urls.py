from rest_framework import routers
from .views import RecipeViewSet, CategoryViewSet
from django.urls import path, include

# Create a router instance
router = routers.DefaultRouter()

# Register the RecipeViewSet and CategoryViewSet with the router
router.register(r'recipes', RecipeViewSet)
router.register(r'categories', CategoryViewSet)

# Define the URL patterns for the app
urlpatterns = [
    path('', include(router.urls)) # Include the URLs defined by the router
]