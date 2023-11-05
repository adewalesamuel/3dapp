"""
URL configuration for threeDapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_views(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))   
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from user import views as user_views
from model3d import views as model3d_views
from badge import views as badge_views
from reward import views as reward_views
from view import views as view_views
from website import views as website_views
from file import views as file_views

urlpatterns = [
    path('', website_views.home),

    path('api/test', user_views.index),

    path('api/users/store', user_views.store),
    path('api/users/<int:id>', user_views.show),
    path('api/users', user_views.index),

    path('api/model3ds/<int:id>/view-count', view_views.models_count),
    path('api/model3ds/store', model3d_views.store),
    path('api/model3ds/<int:id>', model3d_views.show),
    path('api/users/<int:id>/model3ds', model3d_views.user_index),
    path('api/model3ds', model3d_views.index),

    path('api/badges', badge_views.index),

    path('api/users/<int:id>/rewards', reward_views.user_index),

    path('api/views/store', view_views.store),

    path('api/login', user_views.login),

    path('api/upload', file_views.upload),

    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)