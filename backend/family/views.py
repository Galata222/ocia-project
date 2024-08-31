from rest_framework import viewsets, permissions
from .models import Family
from .serializers import FamilySerializer
from rest_framework.response import Response
from rest_framework import status

class FamilyViewSet(viewsets.ModelViewSet):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer
    permission_classes = [permissions.IsAuthenticated]  # Ensure the user is authenticated

    def get_queryset(self):
        # Override to return only family members for the logged-in user
        user = self.request.user
        return Family.objects.filter(user=user)

    def perform_create(self, serializer):
        # Set the user to the currently authenticated user
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        # Handle custom creation logic with authentication
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        # Ensure that the user can only update their own family member
        instance = self.get_object()
        if instance.user != request.user:
            return Response({"error": "You do not have permission to update this family member."}, status=status.HTTP_403_FORBIDDEN)
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Ensure that the user can only delete their own family member
        instance = self.get_object()
        if instance.user != request.user:
            return Response({"error": "You do not have permission to delete this family member."}, status=status.HTTP_403_FORBIDDEN)
        return super().destroy(request, *args, **kwargs)
