from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    # user_id = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        return user
