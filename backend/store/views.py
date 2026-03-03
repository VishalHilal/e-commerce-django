from django.shortcuts import render
from django.http import JsonResponse,HttpResponse

def home(request):
    data = {'message':'this is first json in django'}
    return JsonResponse(data)


# Create your views here.
