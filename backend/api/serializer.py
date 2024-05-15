
from .models import Todo, CustomUser
from rest_framework import serializers

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "name", "email", "password" ]
        extra_kwargs = {"password":{"write_only": True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = CustomUser.objects.create(**validated_data)
        if password is not None:
            user.set_password(password)
            user.save()
        return user

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "task", "due_date", "created_at", "is_completed", "author"]
        extra_kwargs = {"author":{"read_only": True}}

class TodoCompletionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['is_completed']