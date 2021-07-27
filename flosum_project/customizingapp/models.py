from django.db import models
from accountapp.models import User
from django.utils import timezone

# flower_list = {"달리아":2000,"해바라기":3000}
# deco_list = {}
# wrapper_list = {}

# Create your models here.
class Flower(models.Model):
    flower_name = models.CharField("꽃 이름",max_length=100,  null=True)
    flower_color = models.CharField("꽃 색상",max_length=100,  null=True)
    flower_price = models.IntegerField("꽃 가격",  null=True)
    flower_img = models.ImageField("꽃 이미지",  null=True)
    #static 폴더에서 키값으로 검색해서 바로 찾아오면 됨
    def __str__(self):
        return self.flower_name
    
 
class Decoration(models.Model):
    deco_name = models.CharField("데코 이름",max_length=100,  null=True)
    deco_price = models.IntegerField("데코 가격", null=True)
    deco_img = models.ImageField("데코 이미지", null=True)

class Wrapper(models.Model):
    wrapper_name = models.CharField("포장지 이름",max_length=100, null=True)
    wrapper_price = models.IntegerField("포장지 가격",  null=True,)
    wrappr_img = models.ImageField("포장지 이미지", null=True)

class Bouquet(models.Model):
    bouquet_name = models.CharField("꽃다발 이름",max_length=100,  null=True)
    total_price = models.IntegerField("꽃다발 총 가격",  null=True)
    flower = models.ForeignKey(Flower,  null=True, verbose_name="꽃다발 꽃", on_delete=models.CASCADE)
    bouquet_creator = models.ForeignKey(User,  null=True, verbose_name="꽃다발 만든이", on_delete=models.CASCADE)
    decoration = models.ForeignKey(Decoration, null=True, verbose_name="꽃다발 데코", on_delete=models.CASCADE)
    wrapper = models.ForeignKey(Wrapper,  null=True, verbose_name="꽃다발 포장지", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def publish(self):
        self.published_at = timezone.now()
        self.save()

    def __str__(self):
        return self.bouquet_name
    