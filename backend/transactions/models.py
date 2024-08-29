from django.db import models
from user.models import User

class Transaction(models.Model):
    transaction_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=50, choices=[
        ('Contribution', 'Contribution'),
        ('Payout', 'Payout')
    ])
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('Pending', 'Pending'),
        ('Completed', 'Completed'),
        ('Failed', 'Failed')
    ])

    def __str__(self):
        return f'{self.transaction_type} - {self.amount} - {self.user.first_name}'
