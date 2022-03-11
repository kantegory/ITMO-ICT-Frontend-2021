from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, username, password=None):
        if email is None:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):

        if password is None:
            raise ValueError('Superusers must have a password.')
        user = self.create_user(email, username=username, password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class UserProfile(AbstractBaseUser):
    email = models.EmailField(verbose_name='email address',
                              max_length=255, unique=True,
                              )
    username = models.CharField(_('username'),
                                max_length=150,
                                unique=True,
                                error_messages={
                                    'unique': _("A user with that username already      exists."),
                                },
                                )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', ]

    first_name = models.CharField(max_length=25, default='')
    second_name = models.CharField(max_length=25, default='')
    town = models.CharField(max_length=25, default='')
    age = models.CharField(max_length=3, default='')
    education = models.CharField(max_length=30, default='')

    objects = UserManager()

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True


class Note(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    owner = models.ForeignKey(UserProfile, related_name='notes', on_delete=models.CASCADE)
    tags = models.CharField(max_length=200)
    public = models.BooleanField(default=False)

    def was_published_recently(self):
        now = timezone.now()
        return now - timezone.timedelta(days=1) <= self.pub_date <= now

    def __str__(self):
        return self.title
