# family/urls.py

from django.urls import path
from .views import (
    FamilyListView,
    FamilyCreateView,
    FamilyRetrieveView,
    FamilyUpdateView,
    FamilyDestroyView
)

urlpatterns = [
    path('family/', FamilyListView.as_view(), name='family-list'),  # List and create
    path('family/create/', FamilyCreateView.as_view(), name='family-create'),  # Create
    path('family/<int:pk>/', FamilyRetrieveView.as_view(), name='family-detail'),  # Retrieve
    path('family/<int:pk>/update/', FamilyUpdateView.as_view(), name='family-update'),  # Update
    path('family/<int:pk>/delete/', FamilyDestroyView.as_view(), name='family-delete'),  # Delete
]