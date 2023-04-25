# Create your tests here.
from django.test import TestCase
from .models import Recipe, Category
from datetime import date

from django.urls import reverse, resolve, path, include
from rest_framework import routers
from rcpl_app.api.views import RecipeViewSet, CategoryViewSet
from rcpl_app.api.urls import urlpatterns
from rcpl_app.api.serializers import RecipeModelSerializer
from rcpl_app.models import Recipe, Category

# 1 Test that a Recipe can be created with all required fields:
class RecipeModelTestCase(TestCase):
    def setUp(self):
        self.category = Category.objects.create(title='Test Category', description='This is a test category')
        self.recipe = Recipe.objects.create(
            title='Test Recipe', 
            description='This is a test recipe', 
            category=self.category, 
            ingredients='Ingredient 1, Ingredient 2', 
            method='Step 1, Step 2', 
            date=date(2022, 1, 1)
        )

    def test_create_recipe(self):
        recipe = Recipe.objects.create(
            title='test recipe',
            description='test description',
            category=self.category,
            ingredients='test ingredients',
            method='test method',
            image='test.jpg',
            date=date.today(),
        )
        self.assertEqual(recipe.title, 'test recipe')
        self.assertEqual(recipe.description, 'test description')
        self.assertEqual(recipe.category, self.category)
        self.assertEqual(recipe.ingredients, 'test ingredients')
        self.assertEqual(recipe.method, 'test method')
        self.assertEqual(recipe.image, 'test.jpg')
        self.assertEqual(recipe.date, date.today())

    # 2 Test that a Recipe can be retrieved by its category:
    def test_get_recipe_by_category(self):
        # create a new category
        new_category = Category.objects.create(title='New Test Category', description='This is a new test category')

        # create two recipes, with one assigned to the new category and the other assigned to the existing category
        recipe1 = Recipe.objects.create(
            title='Test Recipe 1', 
            description='This is a test recipe 1', 
            category=self.category, 
            ingredients='Ingredient 1, Ingredient 2', 
            method='Step 1, Step 2', 
            date=date(2022, 1, 1)
        )
        recipe2 = Recipe.objects.create(
            title='Test Recipe 2', 
            description='This is a test recipe 2', 
            category=new_category, 
            ingredients='Ingredient 3, Ingredient 4', 
            method='Step 3, Step 4', 
            date=date(2022, 1, 2)
        )

        # retrieve all recipes belonging to the new category
        recipes = Recipe.objects.filter(category=new_category)

        # assert that only one recipe is returned and it belongs to the new category
        self.assertEqual(len(recipes), 1)
        self.assertEqual(recipes[0], recipe2)


    # 3 Test that a Recipe can be deleted:
    def test_delete_recipe(self):
        recipe_id = self.recipe.id
        self.recipe.delete()
        self.assertFalse(Recipe.objects.filter(id=recipe_id).exists())      

    # 4 Test that a Category can be created with all required fields:        
    def test_create_category(self):
        category = Category.objects.create(
            title='Test Category', 
            description='This is a test category'
        )
        self.assertEqual(category.title, 'Test Category')
        self.assertEqual(category.description, 'This is a test category')

    # 5 Test that a Category can be updated:
    def test_update_category(self):
        category = Category.objects.create(
            title='Test Category', 
            description='This is a test category'
        )
        category.title = 'New Test Category'
        category.save()
        self.assertEqual(category.title, 'New Test Category')

    # 6 Test that a Category can be deleted:
    def test_delete_category(self):
        category_id = self.category.id
        self.category.delete()
        self.assertFalse(Category.objects.filter(id=category_id).exists())


class TestAPIUrls(TestCase):
    
    # 7 verifies that the URL for the recipe list view (/recipes/) resolves to the RecipeViewSet's list method
    def test_recipe_list_url(self):
        url = reverse('recipe-list')
        self.assertEqual(resolve(url).func.__name__, RecipeViewSet.as_view({'get': 'list'}).__name__)
        
    # 8 verifies that the URL for the category detail view (/categories/<int:pk>/) with a primary key of 1 resolves to the CategoryViewSet's retrieve method.    
    def test_category_detail_url(self):
        url = reverse('category-detail', kwargs={'pk': 1})
        self.assertEqual(resolve(url).func.__name__, CategoryViewSet.as_view({'get': 'retrieve'}).__name__)

    def test_recipes_url_resolves(self):
        url = reverse('recipe-list')
        self.assertEqual(resolve(url).func.__name__, RecipeViewSet.as_view({'get': 'list'}).__name__)        
        
# 10 test if expected fields contains and that the data in those fields is correct. 
class RecipeModelSerializerTestCase(TestCase):

    def setUp(self):
        self.recipe = Recipe.objects.create(
            title="test_recipe",
            description="test_description",
            category="breakfast",
            ingredients='Test recipe ingredients',
            method='Test recipe method',
            date=date.today(), 
        )
        self.serializer = RecipeModelSerializer(instance=self.recipe)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertCountEqual(data.keys(), ['id', 'title', 'description', 'category', 'ingredients', 'method', 'image', 'date'])