from enum import unique
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField("이름",max_length=20)
    username = models.CharField("아이디",max_length=30, unique=True)
    address = models.TextField("주소",blank=False)
    email = models.EmailField("이메일", max_length=60, unique=True)
    