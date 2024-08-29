# Generated by Django 5.1 on 2024-08-22 11:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Risk',
            fields=[
                ('risk_id', models.AutoField(primary_key=True, serialize=False)),
                ('risk_type', models.CharField(max_length=50)),
                ('risk_description', models.TextField()),
                ('risk_date', models.DateField()),
                ('status', models.CharField(choices=[('Submitted', 'Submitted'), ('Under Review', 'Under Review'), ('Approved', 'Approved'), ('Rejected', 'Rejected')], max_length=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
    ]
