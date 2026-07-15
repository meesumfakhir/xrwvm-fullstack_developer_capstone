from django.http import JsonResponse
from django.contrib.auth import login, authenticate
import logging
import json
from django.views.decorators.csrf import csrf_exempt
from .models import CarMake, CarModel

# Get an instance of a logger
logger = logging.getLogger(__name__)

# Create your views here.

@csrf_exempt
def login_user(request):
    data = json.loads(request.body)
    username = data['userName']
    password = data['password']
    user = authenticate(username=username, password=password)
    data = {"userName": username}
    if user is not None:
        login(request, user)
        data = {"userName": username, "status": "Authenticated"}
    return JsonResponse(data)

def get_cars(request):
    """
    Task 14 Requirement: Return CarModels with make and model keys.
    """
    # Fetch all car models
    car_models = CarModel.objects.select_related('car_make')
    
    # Format the data
    cars = []
    for car in car_models:
        cars.append({
            "make": car.car_make.name, 
            "model": car.name
        })
    
    # Return exactly as requested
    return JsonResponse({"CarModels": cars})
