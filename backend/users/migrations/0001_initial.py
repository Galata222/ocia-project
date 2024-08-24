# Generated by Django 5.1 on 2024-08-22 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('gender', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('phone', models.CharField(max_length=15, unique=True)),
                ('address', models.CharField(max_length=255)),
                ('occupation', models.CharField(max_length=100)),
                ('employer', models.CharField(max_length=100)),
                ('monthly_income', models.DecimalField(decimal_places=2, max_digits=10)),
                ('bank_name', models.CharField(max_length=100)),
                ('bank_account_number', models.CharField(max_length=20)),
                ('swift_bic_code', models.CharField(max_length=11)),
                ('registration_date', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Rejected', 'Rejected')], max_length=10)),
            ],
        ),
    ]
