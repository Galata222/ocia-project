from rest_framework import generics
from .models import Family
from .serializers import FamilySerializer

# List all family members or create a new family member
class FamilyListCreateView(generics.ListCreateAPIView):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer

# Retrieve, update, or delete a specific family member
class FamilyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer
