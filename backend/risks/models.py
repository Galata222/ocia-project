from django.db import models
from user.models import User

class Risk(models.Model):
    risk_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    risk_type = models.CharField(max_length=50)
    risk_description = models.TextField()
    risk_date = models.DateField()
    status = models.CharField(max_length=20, choices=[
        ('Submitted', 'Submitted'),
        ('Under Review', 'Under Review'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected')
    ])

    def __str__(self):
        return f'{self.risk_type} - {self.user.first_name}'
