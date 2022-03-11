from django.urls import path
from .views import *


app_name = "classified"

urlpatterns = [
   path('jobs/<int:pk>', JobApiSingleView.as_view()),
   path('jobs/get', JobApiGetView.as_view()),
   path('jobs/new', JobApiCreateView.as_view()),
   path('industry/get', IndustryGetView.as_view()),
   path('industry/new', IndustryApiCreateView.as_view()),
   path('region/get', RegionGetView.as_view()),
   path('region/new', RegionApiCreateView.as_view()),
   path('company/get', CompanyGetView.as_view()),
   path('company/new', CompanyApiCreateView.as_view()),
   path('jobs-response/get', JobResponseGetView.as_view()),
   path('jobs-response/new', JobResponseApiCreateView.as_view()),
]

