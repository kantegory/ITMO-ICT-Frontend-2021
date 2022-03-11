from django.contrib.auth import get_user_model
from .models import Note, UserProfile
from .serializers import SignupSerializer, NoteSerializer,\
	RegisterSerializer,ProfileSerializer,ConfidentProfileSerializer,\
	NoteSerializerDetail,NoteSerializerDetailCreate,NotePublicSerializer

from rest_framework.renderers import JSONRenderer
from rest_framework import viewsets, permissions, generics


from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class SignupAPIView(APIView):
	"""
	API view for sign up API
	"""
	permission_classes = []

	def post(self, request):

		password = request.POST.get('password', None)
		confirm_password = request.POST.get('confirm_password', None)

		if password == confirm_password:

			serializer = SignupSerializer(data=request.data)
			# serializer.create(validated_data=request.data)
			serializer.is_valid(raise_exception=True)
			serializer.save()

			data = serializer.data
			response = status.HTTP_201_CREATED
		else:
			data = ''
			raise ValidationError(
				{'password_mismatch': 'Password fields didn not match.'})
		return Response(data, status=response)

class ProfileView(viewsets.ModelViewSet):

	serializer_class = ProfileSerializer
	queryset = UserProfile.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	renderer_classes = [JSONRenderer]

	def filter_queryset(self, queryset):
		name = self.request.parser_context["kwargs"]
		queryset = UserProfile.objects.filter(username=name["slug"])
		return queryset

class ConfidentProfileView(viewsets.ModelViewSet):

	serializer_class = ConfidentProfileSerializer
	queryset = UserProfile.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	renderer_classes = [JSONRenderer]

	def filter_queryset(self, queryset):
		return UserProfile.objects.filter(email=self.request.user)

	def get_object(self):
		return UserProfile.objects.get(email=self.request.user)

	def perform_update(self, serializer):
		serializer.save()



class Logout(APIView):

	def get(self, request, format=None):
		request.user.auth_token.delete()
		return Response(status=status.HTTP_200_OK)


class NoteViewDetail(viewsets.ModelViewSet):
	serializer_class = NoteSerializerDetail
	queryset = Note.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	renderer_classes = [JSONRenderer]

	def filter_queryset(self, queryset):
		params = self.request.parser_context.get("kwargs")
		return Note.objects.filter(owner=self.request.user, id=params.get("pk"))

	def perform_update(self, serializer):
		serializer.save()

class NoteDetailCreate(viewsets.ModelViewSet):
	serializer_class = NoteSerializerDetailCreate
	queryset = Note.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	renderer_classes = [JSONRenderer]


	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)



class NoteViewSet(viewsets.ModelViewSet):

	serializer_class = NoteSerializer
	queryset = Note.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	renderer_classes = [JSONRenderer]

	def filter_queryset(self, queryset):
		page = self.request.query_params.get("_page")
		limit = self.request.query_params.get("_limit")
		if page and limit:
			page, limit = int(page), int(limit)
			queryset = Note.objects.filter(owner=self.request.user)
			return queryset[(page-1)*limit:page*limit]
		queryset = Note.objects.filter(owner=self.request.user)
		return queryset

	def perform_destroy(self, instance):
		instance.delete()




class Public(viewsets.ModelViewSet):
	serializer_class = NotePublicSerializer
	queryset = Note.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	renderer_classes = [JSONRenderer]

	def filter_queryset(self, queryset):
		page = self.request.query_params.get("_page")
		limit = self.request.query_params.get("_limit")
		if page and limit:
			page, limit = int(page), int(limit)
			queryset = Note.objects.filter(public__icontains=True)
			return queryset[(page - 1) * limit:page * limit]
		return Note.objects.filter(public__icontains=True)



class PublicViewDetail(viewsets.ModelViewSet):
	serializer_class = NotePublicSerializer
	queryset = Note.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	renderer_classes = [JSONRenderer]

	def filter_queryset(self, queryset):
		params = self.request.parser_context.get("kwargs")
		return Note.objects.filter(public__icontains=True, id=params.get("pk"))


class Register(viewsets.ModelViewSet):

	model = get_user_model()
	serializer_class = RegisterSerializer
	permission_classes = [permissions.AllowAny]

	def perform_create(self,serializer):
		serializer.save()
