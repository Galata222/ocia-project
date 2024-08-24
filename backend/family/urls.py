from django.urls import path
from .views import FamilyListCreateView, FamilyDetailView

urlpatterns = [
    path('family/', FamilyListCreateView.as_view(), name='family-list-create'),
    path('family/<int:pk>/', FamilyDetailView.as_view(), name='family-detail'),
]
