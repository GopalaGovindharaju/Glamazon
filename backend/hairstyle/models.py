from django.db import models

class HairStyle(models.Model):
    UserName = models.CharField(max_length = 100, null = False)
    OrginalImage = models.FileField(upload_to='HairStyle/OriginalImage/', null=True, blank=True)
    FilteredImage = models.FileField(upload_to='HairStyle/FilteredImage/', null=True, blank=True)
    WishList = models.BooleanField(default = False)
 
    def __str__(self):
        return self.UserName
 