from rest_framework import generics
from .models import Admin
from .serializers import AdminSerializer

# List all admins or create a new admin
class AdminListCreateView(generics.ListCreateAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

# Retrieve, update, or delete a specific admin
class AdminDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
