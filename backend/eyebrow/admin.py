from django.contrib import admin

from .models import Eyebrow

class Eyebrow_Admin(admin.ModelAdmin):
    list_display = ('UserName', 'OrginalImage', 'FilteredImage', 'WishList', )

admin.site.register(Eyebrow, Eyebrow_Admin)