from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .models import Todo
from .serializer import UserSerializer, TodoSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

class TodoListCreateView(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user # get the user that is authenticated
        todos = Todo.objects.filter(author=user) # get all note from the authenticated user and return it
        return todos
    
    def perform_create(self, serializer): # access the serializer_class which is NoteSerializer
        if serializer.is_valid():  # check if serializztion is valid
            serializer.save(author=self.request.user) # add the author to the note


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]