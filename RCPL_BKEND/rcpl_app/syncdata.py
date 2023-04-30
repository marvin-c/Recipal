import requests
import json
from .models import Recipe


# Retrieve data from the local database
recipes = Recipe.getRecipes()

# Convert data to JSON format
jsonData = json.dumps(recipes)

# Make sure the device is connected to a network
response = requests.get('https://www.google.com')
if response.status_code == 200:
    # Synchronize data with the server
    url = 'http://192.9.174.169/api/Recipes'
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url, data=jsonData, headers=headers)

    if r.status_code == 200:
        # Data was successfully synchronized, update the local database
        Recipe.updateRecipes(json.loads(r.text))
    else:
        # Error handling code goes here
        pass
else:
    # Error handling code goes here
    pass
