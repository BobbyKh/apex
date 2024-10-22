from .models import Event, UserProfile
from django.contrib import admin
from .models import AboutUs, Membership, Service, Suscription, Team, Tournament, Product, Brand

# Register your models here.


admin.site.register([
    Tournament,
    Product,
    Brand,
    Suscription,
    Membership,
    Team,
    AboutUs,
    Service,
    Event,
    UserProfile,
    
       
])