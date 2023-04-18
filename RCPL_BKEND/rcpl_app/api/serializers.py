from rest_framework import serializers
from ..models import Recipe


class EventModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'description', 'date')