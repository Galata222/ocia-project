# Generated by Django 5.1.1 on 2024-11-10 09:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('admins', '0003_admin_last_login'),
    ]

    operations = [
        migrations.RenameField(
            model_name='admin',
            old_name='admin_id',
            new_name='user_id',
        ),
    ]
