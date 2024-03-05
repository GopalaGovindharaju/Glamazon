from django.urls import path
from . import views

urlpatterns = [
    path('getFilteredHairstyle/', views.getFilteredHairstyle, name = 'getFilteredHairstyle'),
]
   