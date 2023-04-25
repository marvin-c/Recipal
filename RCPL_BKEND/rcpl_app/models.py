from django.db import models

# Create your models here.
from django.db import models
# import qrcode
from io import BytesIO
from django.core.files.base import ContentFile
from PIL import Image

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=50)
    ingredients = models.TextField()
    method = models.TextField()
    image = models.ImageField(blank=True, upload_to='images/')
    date = models.DateField()

    def __str__(self):
        return str(self.title)

class Category(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(blank=True, upload_to='blog_images/')

    def __str__(self):
        return str(self.title)
