from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['point', 'recipients', 'hashtags', 'comments']


# class PostSerializer(serializers.Serializer):
#     point = serializers.IntegerField()
#     recipients = serializers.ListField(child=serializers.CharField())
#     hashtags = serializers.ListField(child=serializers.CharField())
#     comments = serializers.CharField()
#

    # recipients = serializers.ListField(
    #     child=serializers.CharField(allow_blank=False, trim_whitespace=False))
    # hashtags = serializers.ListField(
    #     child=serializers.CharField(allow_blank=False, trim_whitespace=False))

    # class StringListField(serializers.ListField):
    #     recipients = serializers.CharField()
    #     hashtags = serializers.CharField()


    # class Meta:
    #     fields = '__all__'
    #     model = Post

    # def create(self, validated_data):
    #     post = Post.objects.create(**validated_data)
    #     return post
