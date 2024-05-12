from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .models import Todo
from .serializer import UserSerializer, TodoSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import APIView
from rest_framework.response import Response

# Create your views here.

class TodoListView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request): # get the logged in user
        user = self.request.user
        todos = Todo.objects.filter(author=user) # get all todos that belongs to the logged in user
        serializer = TodoSerializer(todos, many=True)    
        return Response(serializer.data)    
    
    def post(self, request):
        user = self.request.user # get the logged in user
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid() :
            serializer.save(author=user); # add the logged in user as author
            return Response(serializer.data)
        return Response(serializer.errors)
    
   
    
class TodoUpdateView(APIView):
     permission_classes = [IsAuthenticated]
     
     def put(self, request, pk):
        user =self.request.user # get the logged in user
        todo = Todo.objects.get(author=user, pk=pk) # get the specific todo
        serilaizer = TodoSerializer(todo, data=request.data) # update the todo
        if serilaizer.is_valid():
            serilaizer.save()
            return Response(serilaizer.data)
        return Response(serilaizer.errors)
        
    
class TodoDeleteView(APIView):
    permission_classes = [IsAuthenticated]
    
    def delete(self, request, pk): # get the logged in user
        user = self.request.user
        todo = Todo.objects.filter(author=user, pk=pk)
        todo.delete()
        return Response({"status": "deleted"})
    
    
class CreateUserVIew(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
        