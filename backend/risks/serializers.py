from rest_framework import serializers
from .models import Risk

class RiskSerializer(serializers.ModelSerializer):
    """Serializer for the Risk model."""

    class Meta:
        model = Risk
        fields = [
            'risk_id',
            'user',
            'risk_type',
            'risk_description',
            'risk_date',
            'status',
        ]
        read_only_fields = ['risk_id', 'user']  # Prevent modification of certain fields
