import json
from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict
from utils.auth import auth_user
from model3d.models import User
from model3d.models import Model3d

# Create your views here.

def index(request):
    try:
        model3ds = Model3d.objects.all()\
            .order_by('-id').values()
    except Exception as e:
        data = {
            'error': True,
            'model3ds': str(e)
        }

        return JsonResponse(data, status=500)
    
    data = {
        'success': True,
        'model3ds': list(model3ds)
    }

    return JsonResponse(data)

def user_index(request, id):
    try:
        model3ds = Model3d.objects.filter(
            user=User.objects.get(id=id))\
                .all().order_by('-id').values()
    except Exception as e:
        data = {
            'error': True,
            'model3ds': str(e)
        }

        return JsonResponse(data, status=500)
    
    data = {
        'success': True,
        'model3ds': list(model3ds)
    }

    return JsonResponse(data)

def store(request):
    status = 200
    body = json.loads(request.body)

    try:
        if request.method != 'POST':
            status = 400
            raise Exception('Bad request')
        
        user = auth_user(request)

        model3d = Model3d(
            name=body['name'],
            description=body['description'],
            file_url=body['file_url'],
            user=User.objects.get(id=user['id'])
        )

        model3d.save()
    except Exception as e:
        data = {
            'error': True,
            'message': str(e)
            }
        
        return JsonResponse(data, status=500)
    
    data = {
        'success': True,
        'model3d': model_to_dict(model3d)
    }

    return JsonResponse(data)


def show(request, id: int):
    model3d = Model3d.objects.get(id=id)
    model3d_dict = model_to_dict(model3d)

    data = {
        'success': True,
        'model3d': model3d_dict
    }

    return JsonResponse(data)