from django.http import JsonResponse, HttpRequest
from utils.auth import auth_user
from django.conf import settings
from django.core.files.storage import FileSystemStorage


def upload(request):

    try:        
        if request.method != 'POST':
            raise Exception('bad request')

        # auth_user(request)
                
        myfile = request.FILES['file']

        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        uploaded_file_url = fs.url(filename)
    except Exception as e:
        data = {
            'error': True,
            'message': str(e)
        }

        return JsonResponse(data, 500)
    
    data = {
        'succes': True,
        'file_url': 'http://localhost:8000' + uploaded_file_url
    }

    return JsonResponse(data)