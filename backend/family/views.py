# family/views.py

from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Family
from .serializers import FamilySerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
class FamilyListView(generics.ListAPIView):
    """Retrieve a list of family members for the authenticated user."""
    serializer_class = FamilySerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication, TokenAuthentication, BasicAuthentication]

    def get_queryset(self):
        print("userrr", self.request.user)
        return Family.objects.filter(user=self.request.user)  # Filter by user

class FamilyCreateView(generics.CreateAPIView):
    """Create a new family member for the authenticated user."""
    serializer_class = FamilySerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication, TokenAuthentication, BasicAuthentication]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Associate the user with the new family member

class FamilyRetrieveView(generics.RetrieveAPIView):
    """Retrieve a specific family member for the authenticated user."""
    serializer_class = FamilySerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        return Family.objects.filter(user=self.request.user)  # Filter by user

class FamilyUpdateView(generics.UpdateAPIView):
    """Update an existing family member for the authenticated user."""
    serializer_class = FamilySerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        return Family.objects.filter(user=self.request.user)  # Filter by user

class FamilyDestroyView(generics.DestroyAPIView):
    """Delete a family member for the authenticated user."""
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_queryset(self):
        return Family.objects.filter(user=self.request.user)  # Filter by user

    def destroy(self, request, *args, **kwargs):
        family_member = self.get_object()
        self.perform_destroy(family_member)
        return Response(status=status.HTTP_204_NO_CONTENT)