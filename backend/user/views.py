# from rest_framework import generics
# from .models import User
# from .serializers import UserSerializer

# # List all users or create a new user
# class UserListCreateView(generics.ListCreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# # Retrieve, update, or delete a specific user
# class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
# users/views.py

from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
