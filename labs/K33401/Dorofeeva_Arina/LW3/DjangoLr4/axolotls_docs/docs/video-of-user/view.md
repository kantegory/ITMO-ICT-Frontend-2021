#Add video for user

**URL** : `/video-of-user/create/`

**Methods** : `PUT, POST, DELETE`

**Data constraints** : `{}`

**Generics type** : `CreateAPIView`

**Code** : `200 OK`

**Content** : `{[]}`


```python
class VideoOfUser(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.TextField()
    link = models.TextField()

    def __str__(self):
        return "пользователь: {}, Название: {}".format(self.owner, self.owner)
```

```python
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoOfUser
        fields = "__all__"
```

```python
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
```

