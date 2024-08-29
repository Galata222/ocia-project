# from django.urls import path
# from .views import UserListCreateView, UserDetailView

# urlpatterns = [
#     path('users/', UserListCreateView.as_view(), name='user-list-create'),
#     path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
# ]

# users/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, UserRegistrationView, LoginView

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', LoginView.as_view(), name='login'),
    path('', include(router.urls)),
]

