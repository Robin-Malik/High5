from rest_framework.response import Response
from rest_framework import viewsets, generics
from django.core.mail import EmailMessage
from .models import Notification, EmailNotification
from .serializers import NotifiactionSerializer, EmailNotifiactionSerializer


class NotifiactionViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotifiactionSerializer

    def get_queryset(self):
        queryset = self.queryset.filter(recipient=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(recipient=self.request.user)

    def perform_update(self, serializer):
        serializer.save(is_read=True)


class EmailNotifiactionViewSet(generics.CreateAPIView):
    queryset = EmailNotification.objects.all()
    serializer_class = EmailNotifiactionSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email_notification = serializer.save()
        self.send_email_notification(email_notification)
        return Response(serializer.data)

    def send_email_notification(self, email_notification):
        email = EmailMessage(
            email_notification.subject,
            email_notification.message,
            to=[email_notification.recipient]
        )
        email.send()
