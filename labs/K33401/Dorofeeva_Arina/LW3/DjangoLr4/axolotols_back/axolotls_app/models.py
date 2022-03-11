from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class User(AbstractUser):
    phone = models.CharField("Телефон", max_length=15, blank=True, null=True)

    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone', 'id']

    def __str__(self):
        return self.username


class VideoOfUser(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.TextField()
    link = models.TextField()

    def __str__(self):
        return "пользователь: {}, Название: {}".format(self.owner, self.owner)


class LinkToVideo(models.Model):
    tags = models.CharField(max_length=200)
    link = models.TextField()

    def __str__(self):
        return "tags: {}, link: {}".format(self.tags, self.link)
