from django.shortcuts import render

from rest_framework import viewsets, permissions
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser

from dataapis.models import BirbSighting, Location, Species
from dataapis.serializers import BirbSightingSerializer, LocationSerializer, SpeciesSerializer

# Create your views here.
class BirbSightingViewSet(viewsets.ModelViewSet):
  queryset =  BirbSighting.objects.all()
  serializer_class = BirbSightingSerializer
  parser_classes = (MultiPartParser, FormParser)
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  
  def get_queryset(self):
    params = self.request.query_params
    queryset = BirbSighting.objects.all()
    
    try:
      queryset = queryset.filter(species__name__icontains=params['species'])
    except:
      pass
      
    try:
      queryset = queryset.filter(species__rarity__icontains=params['rarity'])
    except:
      pass
      
    try:
      queryset = queryset.filter(location__name__icontains=params['location'])
    except:
      pass
      
    try:
      queryset = queryset.filter(date__icontains=params['date'])
    except:
      pass
      
    return queryset
    
class LocationViewSet(viewsets.ModelViewSet):
  queryset = Location.objects.all()
  serializer_class = LocationSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  
  def get_queryset(self):
    params = self.request.query_params
    queryset = Location.objects.all()
    
    try:
      queryset = queryset.filter(name__icontains=params['name'])
    except:
      pass
    
    return queryset
  
class SpeciesViewSet(viewsets.ModelViewSet):
  queryset = Species.objects.all()
  serializer_class = SpeciesSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  
  def get_queryset(self):
    params = self.request.query_params
    queryset = Species.objects.all()
    
    try:
      queryset = queryset.filter(rarity__icontains=params['rarity'])
    except:
      pass
    
    try:
      queryset = queryset.filter(name__icontains=params['name'])
    except:
      pass
    
    return queryset