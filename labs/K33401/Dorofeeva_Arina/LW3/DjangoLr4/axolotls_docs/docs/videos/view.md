#Create video

**URL** : `/Video/create/`

**Methods** : `PUT, POST, DELETE`

**Data constraints** : `{}`

**Generics type** : `CreateAPIView`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

```python

class LinkToVideo(models.Model):
    tags = models.CharField(max_length=200)
    link = models.TextField()

    def __str__(self):
        return "tags: {}, link: {}".format(self.tags, self.link)
```

```python
class LinkToVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkToVideo
        fields = "__all__"

```

```python
class LinkToVideoViewSet(viewsets.ModelViewSet):
    def get_queryset(self):

        queryset = LinkToVideo.objects.all()
        return queryset

    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = LinkToVideoSerializer
```

