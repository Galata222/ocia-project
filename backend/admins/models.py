from django.db import models
from django.contrib.auth.hashers import make_password
from django.utils import timezone

class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True, max_length=100)
    phone = models.CharField(unique=True, max_length=15)
    role = models.CharField(max_length=50)
    department = models.CharField(max_length=100, null=True, blank=True)
    hire_date = models.DateField(null=True, blank=True)
    office_location = models.CharField(max_length=255, null=True, blank=True)
    access_level = models.CharField(max_length=20, choices=[
        ('Admin', 'Admin'),
        ('Manager', 'Manager'),
        ('Staff', 'Staff')
    ])
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    password = models.CharField(max_length=128)  # Field for storing hashed passwords
    last_login = models.DateTimeField(null=True, blank=True)  # Add last_login field
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.role}'

    def save(self, *args, **kwargs):
        # Hash the password before saving, only if it's not already hashed
        if self.password and not self.password.startswith('pbkdf2_'):
            self.password = make_password(self.password)
        super(Admin, self).save(*args, **kwargs)