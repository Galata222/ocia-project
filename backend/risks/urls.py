from django.urls import path
from .views import RiskListCreateView, RiskDetailView

urlpatterns = [
    path('risks/', RiskListCreateView.as_view(), name='risk-list-create'),
    path('risks/<int:pk>/', RiskDetailView.as_view(), name='risk-detail'),
]
