from rest_framework import serializers
from .models import Notification,EmailNotification


class NotifiactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


class EmailNotifiactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailNotification
        fields = '__all__'


