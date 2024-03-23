from django.urls import path
from . import views

urlpatterns = [
    path('getFilteredEyebrow/', views.getFilteredEyebrow, name = 'getFilteredEyebrowr'),
]