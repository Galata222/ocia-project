"""
Django settings for ocia_system project.
"""

from pathlib import Path
import os
# from user.models import User
# Base directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent

# Security settings
SECRET_KEY = 'django-insecure-)f7$gph77obvv%wmkz5_+lbibb*ilf60$hlno-goci*ai0w0&j'
DEBUG = True
ALLOWED_HOSTS = []
# AUTH_USER_MODEL = 'user.User'
# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'family',
    'user',
    'notifications',
    'risks',
    'transactions',
    'admins',
    'rest_framework',
    'corsheaders',  # Add CORS headers middleware
    'rest_framework.authtoken',  # Add token authentication
    'rest_framework_simplejwt',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Top position
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS settings
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',  # Your React frontend origin
]
CORS_ALLOW_CREDENTIALS = True  # Allow cookies to be sent in CORS requests

# CSRF settings
CSRF_COOKIE_NAME = "csrftoken"  # Ensure Axios can send the CSRF cookie
CSRF_COOKIE_HTTPONLY = False  # Allow JavaScript to access the CSRF token
SESSION_COOKIEONLY = True
CRSF_COOKIE_SAMESITE = 'Strict'
CRSF_SESSION_SAMESITE ='Strict'
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',  # Your frontend domain
]
CSRF_USE_SESSIONS = False  # Disable CSRF session cookies to work with Axios
# CSRF_COOKIE_SECURE = False 
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',  # Use JWT for secure authentication
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',  # Require authentication by default
    ),
}

ROOT_URLCONF = 'ocia_system.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ocia_system.wsgi.application'

# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'ocia_db',
        'USER': 'postgres',
        'PASSWORD': '12345',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization settings
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files settings
STATIC_URL = '/static/'

# Media files settings
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

from datetime import timedelta
AUTH_USER_MODEL = 'user.User'

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=180),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'user_id',  # Update this field name if it's not 'id'
    'USER_ID_CLAIM': 'user_id',  # Adjust the claim accordingly
    
}

# settings.py

import os

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# settings.py

# Email backend
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

# Email host (e.g., Gmail, SendGrid, etc.)
EMAIL_HOST = 'smtp.gmail.com'  # Example for Gmail
EMAIL_PORT = 587  # Standard port for TLS
EMAIL_USE_TLS = True  # Use TLS
EMAIL_HOST_USER = 'galata20wako@gmail.com'  # Your email address
EMAIL_HOST_PASSWORD = 'Bgalase@2030'  # Your email password or app password

# Optional settings
DEFAULT_FROM_EMAIL = 'galata20wako@gmail.com'  # Default sender email