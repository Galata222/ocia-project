from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Risk
from .serializers import RiskSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import TokenAuthentication, BasicAuthentication

class RiskListView(generics.ListAPIView):
    """Retrieve a list of risks for the authenticated user."""
    serializer_class = RiskSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication, TokenAuthentication, BasicAuthentication]

    def get_queryset(self):
        return Risk.objects.filter(user=self.request.user)  # Filter by user

class RiskCreateView(generics.CreateAPIView):
    """Create a new risk for the authenticated user."""
    serializer_class = RiskSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication, TokenAuthentication, BasicAuthentication]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Associate the user with the new risk

class RiskRetrieveView(generics.RetrieveAPIView):
    """Retrieve a specific risk for the authenticated user."""
    serializer_class = RiskSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        return Risk.objects.filter(user=self.request.user)  # Filter by user

class RiskUpdateView(generics.UpdateAPIView):
    """Update an existing risk for the authenticated user."""
    serializer_class = RiskSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        return Risk.objects.filter(user=self.request.user)  # Filter by user

class RiskDestroyView(generics.DestroyAPIView):
    """Delete a risk for the authenticated user."""
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        return Risk.objects.filter(user=self.request.user)  # Filter by user

    def destroy(self, request, *args, **kwargs):
        risk = self.get_object()
        self.perform_destroy(risk)
        return Response(status=status.HTTP_204_NO_CONTENT)


class RiskListAdminView(generics.ListAPIView):
    """Retrieve a list of all risks for admins."""
    serializer_class = RiskSerializer
    permission_classes = [permissions.IsAuthenticated]  
    authentication_classes = [JWTAuthentication, TokenAuthentication, BasicAuthentication]
    def get_queryset(self):
        # Return all risks if the user is an admin
        return Risk.objects.all()