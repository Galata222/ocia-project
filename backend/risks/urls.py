from django.urls import path
from . import views

urlpatterns = [
    path('risks/', views.RiskListView.as_view(), name='risk-list'),  # List risks
    path('risks/create/', views.RiskCreateView.as_view(), name='risk-create'),  # Create risk
    path('risks/<int:pk>/', views.RiskRetrieveView.as_view(), name='risk-retrieve'),  # Retrieve a risk
    path('risks/<int:pk>/update/', views.RiskUpdateView.as_view(), name='risk-update'),  # Update a risk
    path('risks/<int:pk>/delete/', views.RiskDestroyView.as_view(), name='risk-delete'),  # Delete a risk
     path('risks/admin/', views.RiskListAdminView.as_view(), name='risk-list-admin'),
]