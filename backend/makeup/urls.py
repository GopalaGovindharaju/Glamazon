from django.urls import path
from . import views

urlpatterns = [
    path('getmakeup/', views.getmakeup, name = 'getmakeup'),
]
   