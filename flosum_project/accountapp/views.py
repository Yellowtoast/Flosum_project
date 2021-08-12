from django.shortcuts import render, redirect
from django.http import HttpResponse
#from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.contrib import auth

# Create your views here.
def home(request):
    return render(request, 'login.html')

def signup(request):
    if request.method == "POST":
        if request.POST['password1']==request.POST['password2']:
            User = get_user_model()
            user=User.objects.create_user(
                name = request.POST['name'],
                username = request.POST['username'],
                password = request.POST['password1'],
                email = request.POST['email'])
            auth.login(request,user)
            return redirect('/login')
    return render(request,'signup.html')

def login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(request,username = username,password=password)
        if user is not None: # user가 등록되어 있으면 
            auth.login(request,user)
            return redirect('/customizingapp/')
        else: # 아니면
            return render(request,'login.html',{'error':'username or password is incorrect'})

    else:
        return render(request,'login.html')


def logout(request):
    if request.method =="POST":
        auth.logout(request)
        return redirect('/login')
    return render(request,'signup.html')