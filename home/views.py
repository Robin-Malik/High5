from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer
from rest_framework.views import APIView
from rest_framework import generics


class Index(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# class Index(APIView):
#     def post(self, request):
#         serializer = PostSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors)
#
#     def get(self, request):
#         objs = Post.objects.all()
#         serializer = PostSerializer(objs, many=True)
#         return Response(serializer.data)


# @api_view(['GET', 'POST'])
# def index(request):
#     if request.method == 'GET':
#         objs = Post.objects.all()
#         print(objs)
#         serializer = PostSerializer(objs, many=True)
#         return Response(serializer.data)
#
#
#     elif request.method == 'POST':
#         data = request.data
#         serializer = PostSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)

#
#     # @api_view(['POST'])
# def insert_list(request):
