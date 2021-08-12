
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accountapp.urls')),
    path('customizingapp/', include('customizingapp.urls')),
    path('blog/' , include('blog.urls') ), 
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
