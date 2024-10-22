from rest_framework import serializers
from .models import Membership, Product, Brand, Service, Suscription, Team, Tournament, Event, UserProfile
from django.contrib.auth.models import User
from rest_framework import generics

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

        
class BrandSerializer(serializers.ModelSerializer):
    
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Brand
        fields = ['id', 'image', 'name', 'description', 'username']
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'image', 'name', 'description', 'price', 'brand']

class ProductByBrandView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        brand_id = self.kwargs['brand_id']
        return Product.objects.filter(brand_id=brand_id)

class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'image', 'name', 'description', 'status']
class SuscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suscription
        fields = ['id', 'image', 'name', 'description' , 'price']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'image', 'name', 'description', 'price', 'brand']    

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'image', 'name', 'description', 'position']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'image', 'name', 'description']
        
class EvenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'image', 'name', 'description']
        
class UserProfileSerializer(serializers.ModelSerializer):
    
    user = serializers.ReadOnlyField(source='user.username')
    email = serializers.ReadOnlyField(source='user.email')
    suscription = serializers.ReadOnlyField(source='membership.suscription.name')  
    joined_date = serializers.ReadOnlyField(source='membership.created_at')
    expiry_date = serializers.ReadOnlyField(source='membership.expiry_date')
    status = serializers.ReadOnlyField(source='membership.status')
    
    
    
    
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'email', 'suscription',  'phone',  'joined_date', 'expiry_date', 'image', 'status']
        extra_kwargs = {'password': {'write_only': True}}