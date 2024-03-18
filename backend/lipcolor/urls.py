from django.urls import path
from . import views

urlpatterns = [
    path('getFilteredLipcolor/', views.getFilteredLipcolor, name = 'getFilteredLipcolor'),
]
   