# Generated by Django 5.1.1 on 2024-11-07 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admins', '0002_admin_access_level_admin_department_admin_hire_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='admin',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
