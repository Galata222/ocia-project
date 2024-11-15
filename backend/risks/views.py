from rest_framework import generics, status
from rest_framework.response import Response
from .models import Risk
from .serializers import RiskSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

# List all risks or create a new risk
class RiskListCreateView(generics.ListCreateAPIView):
    serializer_class = RiskSerializer
    permission_classes = [IsAuthenticated]
    print('heere')
    def get_queryset(self):
        # Only return risks for the logged-in user
        return Risk.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        # Automatically assign the logged-in user to the risk
        serializer.save(user=self.request.user)

# Retrieve, update, or delete a specific risk
class RiskDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RiskSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Only allow users to access their own risks
        risk = super().get_object()
        if risk.user != self.request.user:
            raise PermissionDenied("You do not have permission to access this risk.")
        return risk
