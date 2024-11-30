from rest_framework import serializers
from .models import Notification
from django.contrib.auth import get_user_model

User = get_user_model()  # Using the custom user model if it's swapped.

# Serializer for listing notifications and marking them as read
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['notification_id', 'user', 'message', 'notification_type', 'is_read', 'notification_date']
        read_only_fields = ['user', 'notification_date', 'is_read']
class NotificationCreateSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        required=False,  # Make the user_id optional
        write_only=True
    )

    class Meta:
        model = Notification
        fields = ['message', 'notification_type', 'user_id']

    def create(self, validated_data):
        # Get the user_id field, which may be None or a valid User instance
        user_id = validated_data.get('user_id', None)

        if user_id:
            # Create notification for a specific user
            user = User.objects.get(id=user_id)
            validated_data['user'] = user
            return Notification.objects.create(**validated_data)
        else:
            # If no user_id is provided, create a notification for all users
            users = User.objects.all()
            notifications = []
            for user in users:
                validated_data['user'] = user
                notifications.append(Notification.objects.create(**validated_data))
            return notifications  # Return a list of notifications sent to all users

