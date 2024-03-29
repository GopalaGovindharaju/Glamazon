# Generated by Django 5.0.3 on 2024-03-27 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('makeup', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='makeup',
            name='FilteredImage',
            field=models.FileField(blank=True, null=True, upload_to='Makeup/FilteredImage/'),
        ),
        migrations.AlterField(
            model_name='makeup',
            name='OrginalImage',
            field=models.FileField(blank=True, null=True, upload_to='Makeup/OriginalImage/'),
        ),
    ]
