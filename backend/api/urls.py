from django.urls import path
from .views import TodoListCreateView, TodoDeleteView

urlpatterns = [
    path('todos/', TodoListCreateView.as_view(), name="todo_list"),
    path('todos/delete/<int:pk>', TodoDeleteView.as_view, name="todo_delete")
]