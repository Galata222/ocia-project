from rest_framework import generics, permissions
from .models import Notification
from .serializers import NotificationSerializer, NotificationCreateSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response

class NotificationListView(generics.ListAPIView):
    """Fetch all notifications for the authenticated user."""
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user).order_by('-notification_date')

class MarkNotificationAsReadView(generics.UpdateAPIView):
    """Mark a notification as read for the authenticated user."""
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user, is_read=False)

    def perform_update(self, serializer):
        # Mark the notification as read and save
        serializer.instance.is_read = True
        serializer.save()

class NotificationSendView(generics.CreateAPIView):
    """Send a notification to all users or a specific user."""
    serializer_class = NotificationCreateSerializer
    permission_classes = [permissions.IsAuthenticated]  # Only admin can send notifications

    def perform_create(self, serializer):
        user_id = self.request.data.get('user_id')  # Get user_id from request data
        
        if user_id:
            # If user_id is provided, create notification for that specific user
            user = User.objects.get(id=user_id)  # Retrieve the user object by user_id
            serializer.save(user=user)  # Save the notification with the user
        else:
            # If no user_id is provided, send notification to all users
            users = User.objects.all()
            notifications = []
            for user in users:
                notifications.append(Notification.objects.create(user=user, **serializer.validated_data))
            
            # Return a response indicating notifications sent to all users
            return Response({"detail": f"Notifications sent to {len(notifications)} users."})

        return Response({"detail": "Notification sent successfully."})
