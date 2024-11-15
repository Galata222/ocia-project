# family/serializers.py

from rest_framework import serializers
from .models import Family

class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = ['family_id', 'relationship', 'name', 'age', 'user']
        read_only_fields = ['user']  # User field is read-only
