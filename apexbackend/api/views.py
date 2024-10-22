
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Membership, Product, Brand, Service, Suscription, Team, Tournament, Event, UserProfile
from .serializer import EvenSerializer, ProductSerializer, BrandSerializer, ServiceSerializer, SuscriptionSerializer, TournamentSerializer, UserProfileSerializer, UserSerializer, TeamSerializer
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.authtoken.models import Token 
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view



@api_view(['POST'])
def login(request):
    """
    Handles login requests and returns an authentication token
    """
    email = request.data.get('email')
    password = request.data.get('password')

    # Check if email and password are provided
    if not email or not password:
        return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

    # Fetch user by email
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

    # Authenticate using username (which is actually email in this case)
    user = authenticate(username=user.username, password=password)

    if user is not None:
        # Generate or get the token
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
        
            
class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class ServiceListCreate(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    
class BrandListCreate(generics.ListCreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class EventSerializer(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EvenSerializer
        
    
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
class SuscriptionListCreate(generics.ListCreateAPIView):
    queryset = Suscription.objects.all()
    serializer_class = SuscriptionSerializer
    
class TeamListCreate(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer    
    
class EventListCreate(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EvenSerializer
    
    
@api_view(['GET', 'POST'])
def subscribe(request, plan_id ):
    if request.method == 'POST':
        try:
            suscription = Suscription.objects.get(id=plan_id)
        except Suscription.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        # Handle subscription form data
        data = {
            'image': request.data.get('image'),
            'name': request.data.get('name'),
            'email': request.data.get('email'),
            'address':request.data.get('address'),
            'phone':request.data.get('phone'),
            'payment_by':request.data.get('payment_by'),
            'payment_reciept':request.data.get('payment_reciept'),
            'suscription': suscription.id,
        }
        
        # Process subscription here (e.g., save to a different model or send email)
        
        membership = Membership.objects.create(
            image=data['image'],
            name=data['name'],
            email=data['email'],
            address=data['address'],
            phone=data['phone'],
            suscription_id=data['suscription'],
            payment_by=data['payment_by'],
            payment_receipt=data['payment_reciept'],
            status=True,
        )
        
        return Response({"message": "Subscription successful"}, status=status.HTTP_201_CREATED)

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)    

class TournamentListCreate(generics.ListCreateAPIView):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

class UserProfileListCreate(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer