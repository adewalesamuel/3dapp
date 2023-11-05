from django.db import models
from user.models import User
from model3d.models import Model3d

# Create your models here.

class View(models.Model):
    model3d = models.ForeignKey(Model3d, on_delete=models.CASCADE)