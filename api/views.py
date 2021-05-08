from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView
from .models import *
from rest_framework import viewsets
from rest_framework import renderers
from rest_framework.response import Response
from rest_framework import generics


class TaskList(generics.ListCreateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
