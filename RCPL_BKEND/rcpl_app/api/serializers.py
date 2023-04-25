from rest_framework import serializers
from ..models import Recipe, Category


class RecipeModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'description', 'category', 'ingredients', 'method', 'image', 'date')

class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'description', 'image')