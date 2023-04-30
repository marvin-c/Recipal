from rest_framework import serializers
from ..models import Recipe, Category


# This serializer class is used to convert Recipe objects to JSON format and vice versa.
# It specifies the fields to be included in the serialized output.
class RecipeModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'description', 'category', 'ingredients', 'method', 'image', 'date')

# This serializer class is used to convert Category objects to JSON format and vice versa.
# It specifies the fields to be included in the serialized output.
class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'description', 'image')