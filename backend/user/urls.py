from django.urls import path
from .views import RegisterView, LoginView, UserProfileView, UserListView  # Import the new view

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),  # New profile endpoint
    path('users/', UserListView.as_view(), name='user-list'),  # New endpoint for listing users
]