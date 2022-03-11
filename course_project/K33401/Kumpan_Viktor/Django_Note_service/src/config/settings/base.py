"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 2.0.1.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

import os
from decouple import config
import datetime
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)

def root(*dirs):
    base_dir = os.path.join(os.path.dirname(__file__), '..', '..') 
    return os.path.abspath(os.path.join(base_dir, *dirs))
BASE_DIR = root()


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_wysiwyg',
    'rest_framework',
    "corsheaders",
    "rest_framework_jwt",
    'rest_framework.authtoken',
    'rest_framework_simplejwt',
    'djoser',
    'api',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [root('templates')],
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

WSGI_APPLICATION = 'config.wsgi.application'


# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

REST_FRAMEWORK = {
'DEFAULT_PERMISSION_CLASSES': ('rest_framework.permissions.IsAuthenticated',),
'DEFAULT_AUTHENTICATION_CLASSES': ( 'rest_framework.authentication.SessionAuthentication',
                                    'rest_framework.authentication.BasicAuthentication',
                                    'rest_framework.authentication.TokenAuthentication',
                                   ),
"DEFAULT_PARSER_CLASSES": ( "rest_framework.parsers.JSONParser", ),
"DEFAULT_RENDERER_CLASSES": ('rest_framework.renderers.JSONRenderer', ),

}
CORS_ORIGIN_WHITELIST = [
    "http://localhost:8080",
    "http://localhost:8000",
]

CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

SIMPLE_JWT = {
     'ACCESS_TOKEN_LIFETIME': datetime.timedelta(minutes=30),
     'REFRESH_TOKEN_LIFETIME': datetime.timedelta(days=1),
}


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Europe/Moscow'

USE_I18N = True

USE_L10N = True

USE_TZ = True



AUTH_USER_MODEL = 'api.UserProfile'
DJANGO_WYSIWYG_FLAVOR = 'ckeditor'

#EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.yandex.ru'
EMAIL_HOST_USER = 'skynotenote@yandex.ru'
EMAIL_HOST_PASSWORD = '123456RR'
EMAIL_PORT = 587
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
STATIC_URL = '/static/'