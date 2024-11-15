from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.hashers import make_password

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Create and return a regular user with an email and password."""
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and return a superuser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(_('email address'), unique=True, max_length=100)
    first_name = models.CharField(_('first name'), max_length=50)
    last_name = models.CharField(_('last name'), max_length=50)
    age = models.IntegerField(_('age'), null=True, blank=True)
    gender = models.CharField(_('gender'), max_length=10, null=True, blank=True)
    phone = models.CharField(_('phone'), unique=True, max_length=15, null=True, blank=True)
    address = models.CharField(_('address'), max_length=255, null=True, blank=True)
    occupation = models.CharField(_('occupation'), max_length=100, null=True, blank=True)
    employer = models.CharField(_('employer'), max_length=100, null=True, blank=True)
    monthly_income = models.DecimalField(_('monthly income'), max_digits=10, decimal_places=2, null=True, blank=True)
    bank_name = models.CharField(_('bank name'), max_length=100, null=True, blank=True)
    bank_account_number = models.CharField(_('bank account number'), max_length=20, null=True, blank=True)
    swift_bic_code = models.CharField(_('SWIFT/BIC code'), max_length=11, null=True, blank=True)
    registration_date = models.DateTimeField(_('registration date'), auto_now_add=True)
    status = models.CharField(_('status'), max_length=10, choices=[
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected')
    ], default='Pending')
    role = models.CharField(_('role'), max_length=10, choices=[
        ('user', 'user'),
        ('admin', 'admin'),
        ('superadmin', 'superadmin'),
    ], default='user')
    profile_picture = models.ImageField(_('profile picture'), upload_to='profile_pictures/', null=True, blank=True)
    last_login = models.DateTimeField(_('last login'), null=True, blank=True)
    
    is_active = models.BooleanField(_('active'), default=True)
    is_staff = models.BooleanField(_('staff status'), default=False)
    is_superuser = models.BooleanField(_('superuser status'), default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith('pbkdf2_'):
            self.password = make_password(self.password)
        super(User, self).save(*args, **kwargs)
