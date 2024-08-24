from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    email = models.EmailField(unique=True, max_length=100)
    phone = models.CharField(unique=True, max_length=15)
    address = models.CharField(max_length=255)
    occupation = models.CharField(max_length=100)
    employer = models.CharField(max_length=100)
    monthly_income = models.DecimalField(max_digits=10, decimal_places=2)
    bank_name = models.CharField(max_length=100)
    bank_account_number = models.CharField(max_length=20)
    swift_bic_code = models.CharField(max_length=11)
    registration_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=[
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected')
    ])

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
