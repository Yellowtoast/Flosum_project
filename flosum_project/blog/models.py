from django.db import models
from django.contrib.auth import get_user_model 
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.deletion import CASCADE

# Create your models here.
class Blog(models.Model):
    User = get_user_model()
    title = models.CharField(max_length = 200)
    pub_date = models.DateTimeField('data published')
    body = models.TextField()
    image = models.ImageField(upload_to="blog/", blank=True, null=True)
    writer = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    User = get_user_model()
    body = models.TextField(max_length=500)
    pub_date = models.DateTimeField('data published')
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    post = models.ForeignKey(Blog, on_delete=models.CASCADE)
    

class Like(models.Model):
    User = get_user_model()
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)