from django.contrib import admin

from classified.models import Industry, Region, Company, Job, JobResponse

admin.site.register(Industry)
admin.site.register(Region)
admin.site.register(Company)
admin.site.register(Job)
admin.site.register(JobResponse)