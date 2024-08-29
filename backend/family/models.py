from django.db import models
from user.models import User

class Family(models.Model):
    family_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    relationship = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    age = models.IntegerField()

    def __str__(self):
        return f'{self.name} ({self.relationship})'
