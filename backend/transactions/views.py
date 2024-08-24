from rest_framework import generics
from .models import Transaction
from .serializers import TransactionSerializer

# List all transactions or create a new transaction
class TransactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

# Retrieve, update, or delete a specific transaction
class TransactionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
