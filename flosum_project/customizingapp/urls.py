from django.urls import path
from . import views

# 앱 이름을 설정하여  accountapp:home을 치면 해당 브라우저로
# 바로 이동하는 함수 설정

urlpatterns = [
    path('', views.main, name ='main'),
    path('Pass/',views.Pass, name='Pass'),
    path('order/',views.order , name='order'),
]