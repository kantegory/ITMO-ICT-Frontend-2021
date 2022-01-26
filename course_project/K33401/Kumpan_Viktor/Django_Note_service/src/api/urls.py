from django.urls import path, include

from rest_framework.routers import DefaultRouter
from .views import SignupAPIView, NoteViewSet,\
    Public, Logout, ProfileView,ConfidentProfileView,\
    NoteViewDetail,NoteDetailCreate,PublicViewDetail
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from rest_framework.authtoken.views import obtain_auth_token


app_name = 'api'

urlpatterns = [
	path('signup/', SignupAPIView.as_view(), name='signup'),
    path('token/', obtain_auth_token, name='token'),
    path('logout/', Logout.as_view(), name='logout'),

    path('profile/<slug>/', ProfileView.as_view({'get': 'list'}), name='profile_info'),

    path('profile/', ConfidentProfileView.as_view({'get': 'list'}), name='self_pr_info'),
    path('profilee/', ConfidentProfileView.as_view({'put': 'update'}), name='profile_update'),

    path('notes/<int:pk>/edit/', NoteViewDetail.as_view({'put': 'update'}), name='reload'),
    path('notes/delete/<int:pk>/', NoteViewSet.as_view({'delete': 'destroy'}), name='del'),
    path('notes/new/', NoteDetailCreate.as_view({'post': 'create'}), name='create'),
    path('notes/', NoteViewSet.as_view({'get': 'list'}), name='note-list'),
    path('notes/public/', Public.as_view({'get':'list',}), name='shared'),
    path('notes/public/<int:pk>/', PublicViewDetail.as_view({'get':'list',}), name='shared'),
    path('notes/<int:pk>/', NoteViewDetail.as_view({'get': 'list'}), name='note-detail'),
]
