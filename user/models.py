from django.db import models
from django.utils.timezone import now

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=225, unique=True)
    email = models.EmailField(max_length=225, unique=True)
    password = models.CharField(max_length=225, default='')
    profil_img_url = models.CharField(max_length=225, blank=True, null=True)
    created_at = models.DateTimeField(default=now())