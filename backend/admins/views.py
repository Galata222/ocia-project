from rest_framework import generics
from .models import Admin
from .serializers import AdminSerializer
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from django.utils.decorators import method_decorator
from user.models import User
from django.shortcuts import get_object_or_404
from django.contrib.auth import logout
from django.utils import timezone
from rest_framework_simplejwt.tokens import RefreshToken
# List all admins or create a new admin
class AdminListCreateView(generics.ListCreateAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

# Retrieve, update, or delete a specific admin
class AdminDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
# views.py
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Admin
from user.models import User

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        print(email, password)
        if not email or not password:
            return Response({"error": "Email and password are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Attempt to authenticate as Admin first
        try:
            admin = get_object_or_404(Admin, email=email)
            if check_password(password, admin.password):
                refresh = RefreshToken.for_user(admin)
                return Response({
                    "message": "Login successful",
                    "admin": {
                        "first_name": admin.first_name,
                        "last_name": admin.last_name,
                        "role": admin.role,
                    },
                    "access": str(refresh.access_token),
                    "refresh": str(refresh)
                }, status=status.HTTP_200_OK)
        
        except Exception:
            pass  # Admin not found, proceed to check User

        # Attempt to authenticate as User if Admin authentication fails
        try:
            user = get_object_or_404(User, email=email)
            if check_password(password, user.password):
                refresh = RefreshToken.for_user(user)
                return Response({
                    "message": "Login successful",
                    "user": {
                        "first_name": user.first_name,
                        "last_name": user.last_name,
                    },
                    "access": str(refresh.access_token),
                    "refresh": str(refresh)
                }, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)  # Log out the user
        return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)
class SecureView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "This is a secure endpoint"})

# from rest_framework import generics
# from .models import Admin
# from .serializers import AdminSerializer
# from django.shortcuts import render
# from django.contrib.auth import authenticate, login
# from rest_framework import permissions, status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from django.views.decorators.csrf import csrf_exempt
# from django.contrib.auth.hashers import check_password
# from django.utils.decorators import method_decorator
# from user.models import User
# from django.shortcuts import get_object_or_404
# from django.contrib.auth import logout
# # List all admins or create a new admin
# class AdminListCreateView(generics.ListCreateAPIView):
#     queryset = Admin.objects.all()
#     serializer_class = AdminSerializer

# # Retrieve, update, or delete a specific admin
# class AdminDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Admin.objects.all()
#     serializer_class = AdminSerializer

# # Ensure this template exists
# # def another_page_view(request)
# #     return render(request, 'login_page.js')  
# class LoginView(APIView):
#     permission_classes = [permissions.AllowAny]

#     def post(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')
#         # print(f'Login attempt - Email: {email}, Password: {password}')
#         if not email or not password:
#             return Response({"error": "Email and password are required."}, status=status.HTTP_400_BAD_REQUEST)

#         # Attempt to authenticate as Admin
#         try:
#             admin = get_object_or_404(Admin, email=email)
#             print("Admin", admin)
#             # Use check_password to verify the hashed password
#             if check_password(password, admin.password):  # Compare input password with hashed password
#                 return Response({
#                     "message": "Login successful",
#                     "admin": {
#                         "first_name": admin.first_name,
#                         "last_name": admin.last_name,
#                         "role": admin.role,
#                     },
#                     "token": "some-token"  # Replace with actual token handling if needed
#                 }, status=status.HTTP_200_OK)
#         except Exception as e:
#                 # Handle the case where the admin does not exist or other errors
#             try:
#                     # print(f'Login attempttt - Email: {email}, Password: {password}')
#                 user = User.objects.get(email=email)
                    
#                     # user = get_object_or_404(User, email=email)
#                 # print(f'User found: {user}')
#                 if check_password(password, user.password):  # Use check_password for user as well
#                     return Response({
#                         "message": "Login successful",
#                         "user": {
#                             "first_name": user.first_name,
#                             "last_name": user.last_name,
#                             },
#                         "token": "some-token"  # Add token handling here if needed
#                     }, status=status.HTTP_200_OK)
#                 else:
#                     return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
#             except User.DoesNotExist:
#                 return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

#             return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

# class LogoutView(APIView):
#     permission_classes = [permissions.IsAuthenticated]

#     def post(self, request):
#         # Django's logout method clears the session and logs out the user
#         logout(request)
#         return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)