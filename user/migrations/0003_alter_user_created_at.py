# Generated by Django 4.2.7 on 2023-11-03 16:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_user_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 3, 16, 30, 0, 253021, tzinfo=datetime.timezone.utc)),
        ),
    ]