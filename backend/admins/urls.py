from django.urls import path
from .views import AdminListCreateView, AdminDetailView, LoginView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('admins/', AdminListCreateView.as_view(), name='admin-list-create'),
    path('admins/<int:pk>/', AdminDetailView.as_view(), name='admin-detail'),
    path('login/', LoginView.as_view(), name='login'),  # Login route for email authentication
    path('api/logout/', LogoutView.as_view(), name='logout'),  # Logout route for session handling

    # JWT token routes
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Get JWT tokens
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh JWT token

    # Secure endpoint that requires authentication
    path('secure-data/', views.SecureView.as_view(), name='secure_data'),
]
