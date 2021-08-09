from django.urls import path
from accountapp.views import home
from . import views

# 앱 이름을 설정하여  accountapp:home을 치면 해당 브라우저로
# 바로 이동하는 함수 설정

urlpatterns = [
    path('', views.home, name ='home'),
    path('signup/', views.signup, name='signup'),
    path('login/',views.login, name='login'),
    path('logout/',views.logout, name='logout'),
]