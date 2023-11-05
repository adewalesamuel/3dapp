from django.http.request import HttpRequest
from django.contrib.auth.hashers import check_password
from user.models import User
from django.forms.models import model_to_dict
import jwt

def authenticate(email: str | None = ..., password: str | None = ...) -> User | None:
    user = User.objects.filter(email=email).first()

    if user is None:
        return None
    
    if check_password(password, user.password) is not True:
        return None
    
    return user

def tokenize(user: dict | None = ...) -> str | None:
    payload = {
        'email': user['email'],
        'id': user['id'],
    }
    return jwt.encode(payload, "secret")

def auth_user(request: HttpRequest) -> dict | None:
    auth_header = request.headers.get('Authorization')

    if auth_header is None:
        raise Exception('non authentifié')
    
    token = str(auth_header).split(' ')[1]

    if token is None: 
        raise Exception('non authentifié')
    
    try:
       user = jwt.decode(token, 'secret', algorithms="HS256")
    except Exception as e:
        raise Exception(str(e))

    return user


            
