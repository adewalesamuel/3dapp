from django.db import models
from user.models import User

# Create your models here.

class Model3d(models.Model):
    name = models.CharField(max_length=225)
    description = models.TextField(blank=True)
    file_url = models.CharField(max_length=225)
    user = models.ForeignKey(User, on_delete=models.CASCADE)