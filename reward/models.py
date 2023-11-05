from django.db import models
from user.models import User
from badge.models import Badge

# Create your models here.

class Reward(models.Model):
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)