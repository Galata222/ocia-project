from rest_framework import generics
from .models import Risk
from .serializers import RiskSerializer

# List all risks or create a new risk
class RiskListCreateView(generics.ListCreateAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer

# Retrieve, update, or delete a specific risk
class RiskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Risk.objects.all()
    serializer_class = RiskSerializer
