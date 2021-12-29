from rest_framework import routers

from .api import *
#
router = routers.DefaultRouter()
router.register('api/videos-of-user', VideoViewSet, 'group')
router.register('api/link-videos', LinkToVideoViewSet, '')

urlpatterns = router.urls
