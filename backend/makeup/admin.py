from django.contrib import admin

from .models import Makeup

class Makeup_Admin(admin.ModelAdmin):
    list_display = ('UserName', 'OrginalImage', 'FilteredImage', 'WishList', )

admin.site.register(Makeup, Makeup_Admin)
