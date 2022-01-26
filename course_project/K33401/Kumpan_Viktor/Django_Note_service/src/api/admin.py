from django.contrib import admin
from .models import Note,UserProfile
from django.contrib.auth import get_user_model
get_user_model()




class NoteAdmin(admin.ModelAdmin):
    list_display = ('title','owner','pub_date', 'was_published_recently')
    list_filter = ['pub_date']

# Replace your other register call with this line:
admin.site.register(Note, NoteAdmin)
UserProfile = admin.site.register(UserProfile)