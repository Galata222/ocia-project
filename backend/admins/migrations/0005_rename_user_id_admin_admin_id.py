# Generated by Django 5.1.1 on 2024-11-13 12:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('admins', '0004_rename_admin_id_admin_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='admin',
            old_name='user_id',
            new_name='admin_id',
        ),
    ]
