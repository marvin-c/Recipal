from rest_framework import viewsets
from ..models import Recipe, Category
from .serializers import RecipeModelSerializer, CategoryModelSerializer
# from django.views.decorators.csrf import csrf_exempt


# @csrf_exempt
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeModelSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoryModelSerializer