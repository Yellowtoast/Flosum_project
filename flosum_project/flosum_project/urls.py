
from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accountapp/', include('accountapp.urls')),
    path('', include('customizingapp.urls')),
]
