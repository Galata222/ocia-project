from rest_framework import generics
from .models import Notification
from .serializers import NotificationSerializer

# List all notifications or create a new notification
class NotificationListCreateView(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

# Retrieve, update, or delete a specific notification
class NotificationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
