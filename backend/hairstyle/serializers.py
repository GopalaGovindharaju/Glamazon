from rest_framework import serializers

from .models import HairStyle

class HairStyle_Serializer(serializers.ModelSerializer):
    class meta:
        model = HairStyle
        fields = ('UserName', 'OrginalImage', 'FilteredImage', 'WishList', )