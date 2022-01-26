from rest_framework import serializers

from classified.models import Job, Industry, Region, Company, JobResponse


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"


class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta:
        model = Job
        fields = "__all__"


class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = "__all__"


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = "__all__"


class JobResponseSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    job = JobSerializer()

    class Meta:
        model = JobResponse
        fields = "__all__"


class JobResponseSerializer2(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = JobResponse
        fields = "__all__"
