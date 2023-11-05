from django.db import models

# Create your models here.

class Badge(models.Model):
    TYPES = [
        ('Star', 'Star'),
        ('Collector', 'Collector'),
        ('Pionneer', 'Pionneer'),
    ]
    name = models.CharField(unique=True, choices=TYPES, max_length=225)
    description = models.TextField(blank=True)
    img_url = models.CharField(blank=True, max_length=225)