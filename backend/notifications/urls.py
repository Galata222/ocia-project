from django.urls import path
from .views import NotificationListView, MarkNotificationAsReadView, NotificationSendView

urlpatterns = [
    # URL for fetching the list of notifications
    path('notifications/', NotificationListView.as_view(), name='notification-list'),
    path('notifications/send/', NotificationSendView.as_view(), name='send-notification'),
    # URL for marking a notification as read (requires the notification ID)
    path('notifications/<int:pk>/mark-as-read/', MarkNotificationAsReadView.as_view(), name='mark-notification-as-read'),
]
