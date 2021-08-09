from django.shortcuts import render
from django.http import HttpResponse
import simplejson as json

# Create your views here.
def main(request):
    return render(request, 'main.html')


def any(request):
    example = 'hello'
    context = {'hello':example}
    return HttpResponse(json.parse(request.body))