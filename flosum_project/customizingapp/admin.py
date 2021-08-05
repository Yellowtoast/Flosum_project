from django.contrib import admin

# Register your models here.
from .models import Flower, Decoration, Bouquet, Wrapper

admin.site.register(Flower)
admin.site.register(Decoration)
admin.site.register(Bouquet)
admin.site.register(Wrapper)