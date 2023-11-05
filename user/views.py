from django.http import JsonResponse, HttpRequest
from django.contrib.auth.hashers import make_password
from user.models import User
from django.forms.models import model_to_dict
from utils.auth import authenticate, tokenize

import json

def index(request: HttpRequest):
    users = User.objects.all().values()

    for user in users:
        del user['password']

    data = {
        'succes': True,
        'users': list(users),
    }

    return JsonResponse(data)

def login(request: HttpRequest):
    status = 200
    
    try:
        if request.method != 'POST':
            status = 400
            raise Exception('Bad request')
        
        body = json.loads(request.body)
        user = authenticate(body['email'], body['password'])

        if (user is None):
            status = 404
            raise Exception('email ou mot de passe incorrect')

        user_dict = model_to_dict(user)
        
        del user_dict['password']

        token = tokenize(user_dict)
    except Exception as e:
        data = {
            'error': True,
            'message': str(e)
            }
        
        return JsonResponse(data, status=500)

    data = {
        'succes': True,
        'user': user_dict,
        'token': token
    }

    return JsonResponse(data)


def store(request: HttpRequest):
    body = json.loads(request.body)

    try:
        if request.method != "POST":
            raise Exception('bad request')
        
        user = User(
            username=body.get('username'),
            email=body.get('email'),
            password=make_password(body.get('password')),
            profil_img_url=body.get('profil_img_url')
        )
        user.save()
    except Exception as e:
        data = {
            'error': True,
            'message': str(e)
        }

        return JsonResponse(data, status=400)
    
    data = {
        'succes': True
    }
    return JsonResponse(data)


def show(request: HttpRequest, id: int):
    user = User.objects.get(id=id)
    user_dict = model_to_dict(user)

    del user_dict['password']

    data = {
        'success': True,
        'user': user_dict
    }

    return JsonResponse(data)
