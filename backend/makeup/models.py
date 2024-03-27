from django.db import models

class Makeup(models.Model):
    UserName = models.CharField(max_length = 100, null = False)
    OrginalImage = models.FileField(upload_to='Makeup/OriginalImage/', null=True, blank=True)
    FilteredImage = models.FileField(upload_to='Makeup/FilteredImage/', null=True, blank=True)
    WishList = models.BooleanField(default = False)
 
    def __str__(self):
        return self.UserName