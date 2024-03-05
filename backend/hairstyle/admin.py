from django.contrib import admin

from .models import HairStyle

class HairStyle_Admin(admin.ModelAdmin):
    list_display = ('UserName', 'OrginalImage', 'FilteredImage', 'WishList', )

admin.site.register(HairStyle, HairStyle_Admin)
