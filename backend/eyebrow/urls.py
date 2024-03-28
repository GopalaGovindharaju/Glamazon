from django.urls import path
from . import views

urlpatterns = [
    path('getFilteredEyebrow/', views.getFilteredEyebrow, name = 'getFilteredEyebrow'),
    path('getGender/', views.getGender, name = 'getGender'),
]