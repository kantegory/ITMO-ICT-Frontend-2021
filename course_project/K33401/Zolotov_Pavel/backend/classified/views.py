import rest_framework.generics
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from classified.serializers import *


class JobApiGetView(ListAPIView):
    serializer_class = JobSerializer

    def get_queryset(self):
        queryset = Job.objects.all()
        params = self.request.query_params
        search = params.get('title', '')
        regex = r'(' + search + ')'
        if search:
            queryset = queryset.filter(title__iregex=regex)
        region = params.get('region')
        if region:
            queryset = queryset.filter(company__regions__name=region)
        industry = params.get('industry')
        if industry:
            queryset = queryset.filter(company__industry__name=industry)
        return queryset


class JobApiSingleView(RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobApiCreateView(CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class IndustryGetView(ListAPIView):
    queryset = Industry.objects.all()
    serializer_class = IndustrySerializer


class IndustryApiCreateView(CreateAPIView):
    queryset = Industry.objects.all()
    serializer_class = IndustrySerializer


class RegionGetView(ListAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class RegionApiCreateView(CreateAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class CompanyGetView(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyApiCreateView(CreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class JobResponseGetView(ListAPIView):
    queryset = JobResponse.objects.all()
    serializer_class = JobResponseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return JobResponse.objects.filter(user=user)


class JobResponseApiCreateView(CreateAPIView):
    queryset = JobResponse.objects.all()
    serializer_class = JobResponseSerializer2

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
