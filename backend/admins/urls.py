from django.urls import path
from .views import AdminListCreateView, AdminDetailView
from . import views

urlpatterns = [
    path('admins/', AdminListCreateView.as_view(), name='admin-list-create'),
    path('admins/<int:pk>/', AdminDetailView.as_view(), name='admin-detail'),
    path('login/', views.login_page_view, name='login_page'),
  
]



