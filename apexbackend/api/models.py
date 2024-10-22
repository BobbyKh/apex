from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    image = models.ImageField(upload_to='profile_images')
    phone = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    membership = models.ForeignKey('Membership', on_delete=models.CASCADE, null=True, blank=True)
    
    
    def __str__(self):
        return self.user.username
    
    def delete_image(self):
        self.image.delete()


class Service(models.Model):
    image = models.ImageField(upload_to='services')
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    def delete_image(self):
        self.image.delete()
        

class Event(models.Model):
    image = models.ImageField(upload_to='events')
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    def delete_image(self):
        self.image.delete()


class Tournament(models.Model):
    image = models.ImageField(upload_to='tournaments')
    name = models.CharField(max_length=255)
    description = models.TextField()
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    def delete_image(self):
        self.image.delete()
        
class Suscription(models.Model):
    image = models.ImageField(upload_to='suscriptions')
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.name
    
    def delete_image(self):
        self.image.delete()

class Membership(models.Model):
    image = models.ImageField(upload_to='memberships', null=True, blank=True)
    name = models.CharField(max_length=255  )
    email = models.EmailField(max_length=255)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    suscription = models.ForeignKey('Suscription', on_delete=models.CASCADE , null=True, blank=True)
    payment_by = models.CharField(max_length=255, null=True, blank=True)
    payment_receipt = models.ImageField(upload_to='memberships', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    expiry_date = models.DateTimeField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.BooleanField(default=True)


    def __str__(self):
        return f"{self.name} - {self.suscription.name}"

    def delete_image(self):
        if self.image:
            self.image.delete()
        if self.payment_receipt:
            self.payment_receipt.delete()

class Brand (models.Model):
    image = models.ImageField(upload_to='brands')
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.name
    
    def delete_image(self):
        self.image.delete()



class Product(models.Model):
    image = models.ImageField(upload_to='affiliates')
    name = models.CharField(max_length=255)
    
    description = models.TextField()
    price = models.IntegerField( default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
    def delete_image(self):
        self.image.delete()
        
class AboutUs (models.Model):
    image = models.ImageField(upload_to='aboutus')
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Team (models.Model):
    image = models.ImageField(upload_to='team')
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def __str__(self):
    return self.name
    
def delete_image(self):
    self.image.delete()
