from django.shortcuts import render
from django.http import HttpResponse
# import simplejson as json
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
# Create your views here.
def main(request):
    return render(request, 'main.html')

@csrf_exempt

def Pass(request):
 return HttpResponse(request.POST['target_name'])

def order(request):
  return render(request, 'order.html')