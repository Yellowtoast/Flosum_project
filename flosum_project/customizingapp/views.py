from django.shortcuts import render, redirect, get_object_or_404
from .models import Blog
from django.utils import timezone

def main(request):
    

    return render(request, 'main.html')
