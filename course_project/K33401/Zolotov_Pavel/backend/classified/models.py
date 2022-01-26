from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Industry(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Region(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Company(models.Model):
    name = models.CharField(max_length=200)
    industry = models.ForeignKey(Industry, on_delete=models.CASCADE)
    regions = models.ManyToManyField(Region)
    rating = models.FloatField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
    description = models.TextField(max_length=500)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Job(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=2000)
    min_years_experience = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(10)])
    remote_available = models.BooleanField(default=False)
    open = models.BooleanField(default=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return "{} в {}".format(self.title, self.company.name)


class JobResponse(models.Model):
    text = models.TextField(max_length=500)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    cv = models.URLField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
