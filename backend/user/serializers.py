# authentication/serializers.py

from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'user_id', 'first_name', 'last_name', 'age', 'gender', 'email', 'phone',
            'address', 'occupation', 'employer', 'monthly_income', 'bank_name', 
            'bank_account_number', 'swift_bic_code', 'password', 'profile_picture'
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def to_representation(self, instance):
        """ Custom representation to include user data with profile picture. """
        user = instance.user
        return {
            'user_id': user.user_id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'profile_picture': user.profile_picture.url if user.profile_picture else None,
        }


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Add this line

    class Meta:
        model = User
        fields = [
            'user_id', 'email', 'first_name', 'last_name', 
            'age', 'gender', 'phone', 'address', 
            'occupation', 'employer', 'monthly_income', 
            'bank_name', 'bank_account_number', 
            'swift_bic_code', 'status', 'role', 
            'registration_date', 'profile_picture', 
            'is_active', 'is_staff', 'is_superuser', 
            'password'  # Ensure 'password' is included here
        ]
        
    def create(self, validated_data):
        password = validated_data.pop('password')  # Safely remove password
        user = User(**validated_data)  # Create user instance
        user.set_password(password)  # Hash the password
        user.save()
        return user