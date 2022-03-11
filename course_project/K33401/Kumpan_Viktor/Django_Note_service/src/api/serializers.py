from .models import Note, UserProfile
from rest_framework import fields, serializers

from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password

from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
# from .token import account_activation_token
from django.core.mail import EmailMessage


class SignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        if validate_password(validated_data['password']) == None:
            password = make_password(validated_data['password'])
            user = UserProfile.objects.create(
                username=validated_data['username'],
                email=validated_data['email'],
                password=password
            )
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['username', "age","education",
                  "first_name","second_name","town",]


class ConfidentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['username', 'email', 'password',
                  "first_name", "second_name", "town",
                  "age", "education",
                  ]
        extra_kwargs = {'username': {'required': False},
                        'email': {'required': False},
                        'password': {'required': False},
                        }
        # confirm_password = serializers.CharField(required=False)

    def update(self, instance, validated_data):
        for inst in validated_data:
            if inst == "password":
                instance.set_password(validated_data["password"])
                continue
            if hasattr(instance, inst):
                setattr(instance, inst, validated_data.get(inst, getattr(instance, inst)))
        instance.save()
        return instance

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'body', 'tags')
        extra_kwargs = {'title': {'required': False},
                        'body': {'required': False},
                        'pub_date': {'required': False},
                        }


class NotePublicSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username')

    class Meta:
        model = Note
        fields = ('id', 'owner', 'title', 'body', 'tags','pub_date')
        extra_kwargs = {'title': {'required': False},
                        'body': {'required': False},
                        'pub_date': {'required': False},
                        }




class NoteSerializerDetail(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'body', 'tags',
                  "pub_date", "tags", "public")
        extra_kwargs = {'title': {'required': False},
                        'body': {'required': False},
                        'pub_date': {'required': False},
                        'tags':{'required': False},
                        }

    def create(self, validated_data):
        instance = super().create(validated_data)
        return instance

    def update(self, instance, validated_data):
        for inst in validated_data:
            if hasattr(instance, inst):
                setattr(instance, inst, validated_data.get(inst, getattr(instance, inst)))
        instance.save()
        return instance

class NoteSerializerDetailCreate(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'body', 'tags',
                  "pub_date", "public")
        extra_kwargs = {'pub_date': {'required': False},
                        'tags': {'required': False},
                        }

    def create(self, validated_data):
        print(validated_data)
        instance = super().create(validated_data)
        return instance


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = UserProfile.objects.create(
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.is_active = False

        # current_site = get_current_site(self)
        mail_subject = 'Activate your blog account.'
        message = render_to_string('acc_active_email.html', {
            'user': user,
            'domain': "127.0.0.1:8000",
            'uid': urlsafe_base64_encode(force_bytes(user.pk)).decode('utf-8'),
            'token': account_activation_token.make_token(user),
        })

        to_email = user.email
        email = EmailMessage(
            mail_subject, message, to=[to_email]
        )
        email.send()
        user.save()

        return user

    class Meta:
        model = UserProfile
        fields = ('id', 'email', 'password')

