import json
from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict
from utils.auth import auth_user
from model3d.models import Model3d
from view.models import View

# Create your views here.
def index(request):
    pass

def models_count(requst, id: int):
    view_count = View.objects.filter(
        model3d=Model3d.objects.get(id=id)).count()
    
    data = {
        'success': True,
        'view_count': view_count
    }

    return JsonResponse(data)


def store(request):
    status = 200
    body = json.loads(request.body)

    try:
        if request.method != 'POST':
            status = 400
            raise Exception('Bad request')
        
        view = View(
            model3d=Model3d.objects.get(id=body['model3d_id'])
        )

        view.save()
    except Exception as e:
        data = {
            'error': True,
            'message': str(e)
            }
        
        return JsonResponse(data, status=500)
    
    data = {
        'success': True,
        'view': model_to_dict(view)
    }

    return JsonResponse(data)
