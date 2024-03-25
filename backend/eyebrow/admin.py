from django.contrib import admin

from .models import Eyebrow, EyebrowTMP

class Eyebrow_Admin(admin.ModelAdmin):
    list_display = ('UserName', 'OrginalImage', 'FilteredImage', 'WishList', )
class EyebrowTMP_Admin(admin.ModelAdmin):
    list_display = ('UserName', 'OrginalImage', 'FilteredImage', )

admin.site.register(Eyebrow, Eyebrow_Admin)
admin.site.register(EyebrowTMP, EyebrowTMP_Admin)