from django.urls import path
from .views import TodoListView, TodoDeleteView, TodoUpdateView, TodoUpdateCompletionView

urlpatterns = [
    path('todos/', TodoListView.as_view(), name="todo_list"),
    path('todos/update/<int:pk>/', TodoUpdateView.as_view(), name="todo_update"),
    path('todos/<int:pk>/complete/', TodoUpdateCompletionView.as_view(), name="todo_complete"),
    path('todos/delete/<int:pk>/', TodoDeleteView.as_view(), name="todo_delete"),
]