from django.urls import path
from .views import TodoListView, TodoDeleteView, TodoUpdateView

urlpatterns = [
    path('todos/', TodoListView.as_view(), name="todo_list"),
    path('todos/update/<int:pk>/', TodoUpdateView.as_view(), name="todo_delete"),
    path('todos/delete/<int:pk>/', TodoDeleteView.as_view(), name="todo_delete"),
]