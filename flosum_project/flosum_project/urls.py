
from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accountapp.urls')),
    path('customizingapp/', include('customizingapp.urls')),
    path('blog/' , include('blog.urls') ), 
]
