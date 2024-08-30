from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    def update(self, instance, validated_data):
        # Handle the profile picture update if provided
        if 'profile_picture' in validated_data:
            instance.profile_picture = validated_data['profile_picture']

        return super().update(instance, validated_data)
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)