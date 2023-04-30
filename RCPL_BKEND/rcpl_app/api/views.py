from rest_framework import viewsets
from ..models import Recipe, Category
from .serializers import RecipeModelSerializer, CategoryModelSerializer
# from django.views.decorators.csrf import csrf_exempt


# @csrf_exempt

# Define a viewset for the Recipe model
class RecipeViewSet(viewsets.ModelViewSet):
    #  Define the queryset to use for the viewset
    queryset = Recipe.objects.all()
    # Define the serializer class to use for the viewset
    serializer_class = RecipeModelSerializer

# Define a viewset for the Category model
class CategoryViewSet(viewsets.ModelViewSet):
    # Define the queryset to use for the viewset
    queryset = Category.objects.all()
    # Define the serializer class to use for the viewset
    serializer_class = CategoryModelSerializer