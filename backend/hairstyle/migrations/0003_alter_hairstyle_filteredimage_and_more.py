# Generated by Django 5.0.3 on 2024-03-05 10:11

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("hairstyle", "0002_alter_hairstyle_filteredimage_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="hairstyle",
            name="FilteredImage",
            field=models.FileField(
                blank=True, null=True, upload_to="HairStyle/FilteredImage/"
            ),
        ),
        migrations.AlterField(
            model_name="hairstyle",
            name="OrginalImage",
            field=models.FileField(
                blank=True, null=True, upload_to="HairStyle/OriginalImage/"
            ),
        ),
    ]
