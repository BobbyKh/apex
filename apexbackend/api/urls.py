from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .serializer import ProductByBrandView
from api import views

urlpatterns = [
    path('token/', obtain_auth_token , name='api_token_auth'),
    path ('login/', views.login , name='login'),
    path('users/', views.UserListCreate.as_view()),
    path('product/', views.ProductListCreate.as_view()),
    path ('suscription/', views.SuscriptionListCreate.as_view()),
    path ('brand/', views.BrandListCreate.as_view()),
    path ('tournament/', views.TournamentListCreate.as_view()),
    path ('team/', views.TeamListCreate.as_view()),
    path ('service/', views.ServiceListCreate.as_view()),
    path ('event/', views.EventListCreate.as_view()),
    path('brand/<int:brand_id>/products/', ProductByBrandView.as_view(), name='product-by-brand'),
    path('subscribe/<int:plan_id>/', views.subscribe, name='subscribe'),
    path ('userprofile/', views.UserProfileListCreate.as_view()),
    
] 
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

