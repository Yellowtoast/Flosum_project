from django.urls import path
from . import views


# 앱 이름을 설정하여  accountapp:home을 치면 해당 브라우저로
# 바로 이동하는 함수 설정
app_name = "accountapp" 

urlpatterns = [
    path('signup/', views.signup),
]

