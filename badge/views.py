import json
from django.shortcuts import render
from django.http import JsonResponse
from utils.auth import auth_user
from user.models import User
from badge.models import Badge

# Create your views here.
def index(request):
    try:
        user = auth_user(request)
        badges = Badge.objects.all().order_by('-id').values()
    except Exception as e:
        data = {
            'error': True,
            'badges': str(e)
        }

        return JsonResponse(data, status=500)
    
    data = {
        'success': True,
        'badges': list(badges)
    }

    return JsonResponse(data)

def store(request):
    pass

def update(request):
    pass

def delete(requst):
    pass
