from rest_framework import viewsets
from ..models import Recipe
from .serializers import EventModelSerializer
# from django.views.decorators.csrf import csrf_exempt


# @csrf_exempt
class EventsViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = EventModelSerializer