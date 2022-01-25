from rest_framework import viewsets, permissions
from .serializers import *


class VideoViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        queryset = VideoOfUser.objects.all()

        owner = self.request.query_params.get('owner', None)
        if owner is not None:
            queryset = queryset.filter(owner=owner)
        return queryset

    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSerializer


class LinkToVideoViewSet(viewsets.ModelViewSet):
    def get_queryset(self):

        queryset = LinkToVideo.objects.all()
        return queryset

    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = LinkToVideoSerializer

