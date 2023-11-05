import json
from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict
from utils.auth import auth_user
from user.models import User
from reward.models import Reward

# Create your views here.

def index(request):
    pass

def user_index(request,id):
    try:
        rewards = Reward.objects.filter(
            user=User.objects.get(id=id))\
                .filter(user_id=id)\
                .select_related('badge').all()
        
        result = [model_to_dict(reward) for reward in rewards]

        for i in range(rewards.count()):
            result[i]['bagde'] = model_to_dict(rewards[i].badge)

    except Exception as e:
        data = {
            'error': True,
            'rewards': str(e)
        }

        return JsonResponse(data, status=500)
    
    data = {
        'success': True,
        'rewards': list(result)
    }

    return JsonResponse(data)

def store(request):
    pass
