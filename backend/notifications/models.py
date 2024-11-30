

from django.db import models
from django.conf import settings

class Notification(models.Model):
    notification_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # Use AUTH_USER_MODEL instead of auth.User
        on_delete=models.CASCADE,
        related_name="notifications",
        null=True
    )
    message = models.TextField()
    notification_type = models.CharField(
        max_length=50,
        choices=[
            ('info', 'Info'),
            ('success', 'Success'),
            ('warning', 'Warning'),
            ('error', 'Error')
        ]
    )
    is_read = models.BooleanField(default=False)
    notification_date = models.DateTimeField(auto_now_add=True),
    def __str__(self):
        return f"Notification for {self.user} - {self.message[:20]}"
