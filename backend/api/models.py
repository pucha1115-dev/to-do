from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    task = models.TextField(max_length=255)
    due_date = models.DateField()
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="task")

    def __str__(self):
        return self.task
    


