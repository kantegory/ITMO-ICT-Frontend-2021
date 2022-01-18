from rest_framework import serializers
from .models import *


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoOfUser
        fields = "__all__"


class LinkToVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkToVideo
        fields = "__all__"

