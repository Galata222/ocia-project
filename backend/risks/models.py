# from django.db import models
# from django.contrib.auth import get_user_model

# User = get_user_model()

# class Risk(models.Model):
#     risk_id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     risk_type = models.CharField(max_length=50)
#     risk_description = models.TextField()
#     risk_date = models.DateField()
#     status = models.CharField(max_length=20, choices=[
#         ('Submitted', 'Submitted'),
#         ('Under Review', 'Under Review'),
#         ('Approved', 'Approved'),
#         ('Rejected', 'Rejected')
#     ])

#     def __str__(self):
#         return f'{self.risk_type} - {self.user.first_name}'
    
from django.db import models
from django.conf import settings

class Risk(models.Model):
    """Model representing risks reported by users."""
    risk_id = models.AutoField(primary_key=True)
    RISK_TYPES = [
        ('Death', 'Death'),
        ('Car Accident', 'Car Accident'),
        ('Sickness', 'Sickness'),
        ('Business Failure', 'Business Failure'),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='risks',
    )
    risk_type = models.CharField(max_length=50, choices=RISK_TYPES)
    risk_description = models.TextField()
    risk_date = models.DateField()
    status = models.CharField(
        max_length=20,
        choices=[('Submitted', 'Submitted'), ('Approved', 'Approved'), ('Disapproved', 'Disapproved')],
        default='Submitted',
    )

    def __str__(self):
        return f'{self.risk_type} ({self.status}) - {self.user.email}'
