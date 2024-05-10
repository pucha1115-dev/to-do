
from .models import Todo
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password" ]
        extra_kwargs = {"password":{"write_only": True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User.objects.create_user(**validated_data)
        if password is not None:
            user.set_password(password)
            user.save()
        return user

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "task", "due_date", "created_at", "is_completed", "author"]
        extra_kwargs = {"author":{"read_only": True}}