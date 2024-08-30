from django.db import models
from django.contrib.auth.hashers import make_password  # Import password hashing function

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
    password = models.CharField(max_length=128)  # Add password field for storing hashed passwords
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)  # Profile picture field

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def save(self, *args, **kwargs):
        # Ensure that the password is always hashed before saving
        if self.password and not self.password.startswith('pbkdf2_'):  # Only hash if not already hashed
            self.password = make_password(self.password)
        super(User, self).save(*args, **kwargs)
