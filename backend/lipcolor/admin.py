from django.contrib import admin

from .models import LipColor

class LipColor_Admin(admin.ModelAdmin):
    list_display = ('UserName', 'OrginalImage', 'FilteredImage', 'WishList', )

admin.site.register(LipColor, LipColor_Admin)
