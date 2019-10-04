from rest_framework import serializers
from dataapis.models import BirbSighting, Location, Species

class BirbSightingSerializer(serializers.HyperlinkedModelSerializer):
  species_text = serializers.SerializerMethodField()
  location_text = serializers.SerializerMethodField()
  rarity = serializers.SerializerMethodField()

  class Meta:
    model = BirbSighting
    fields = ['pk', 'picture', 'species', 'species_text', 'rarity','location', 'location_text', 'date', 'comments', 'url',]
    
  def get_species_text(self, obj):
    return obj.species.name
    
  def get_location_text(self, obj):
    return obj.location.name
    
  def get_rarity(self, obj):
    if obj.species.rarity == 'C':
      return "Common"
    elif obj.species.rarity == 'U':
      return "Uncommon"
    else:
      return "Rare"
    
class LocationSerializer(serializers.HyperlinkedModelSerializer):
  birbsighting_set = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name= 'birbsighting-detail')
  birbsighting_set_text = serializers.SerializerMethodField()
  species_set_text= serializers.SerializerMethodField()

  class Meta:
    model = Location
    fields = ['pk', 'name', 'birbsighting_set', 'birbsighting_set_text', 'species_set', 'species_set_text', 'url',]
    
  def get_birbsighting_set_text(self, obj):
    set = obj.birbsighting_set.all()
    arr =[]
    for i in set:
      arr.append(str(i))
    return list( dict.fromkeys(arr))
    
  def get_species_set_text(self, obj):
    set = obj.species_set.all()
    arr =[]
    for i in set:
      arr.append(str(i))
    return list( dict.fromkeys(arr))
    
class SpeciesSerializer(serializers.HyperlinkedModelSerializer):
  birbsighting_set = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name= 'birbsighting-detail')
  birbsighting_set_text = serializers.SerializerMethodField()
  location_text = serializers.SerializerMethodField()
  rarity_text = serializers.SerializerMethodField()

  class Meta:
    model = Species
    fields = ['pk', 'picture', 'name', 'rarity', 'rarity_text', 'location', 'location_text','birbsighting_set', 'birbsighting_set_text', 'url',]
    
  def get_birbsighting_set_text(self, obj):
    set = obj.birbsighting_set.all()
    arr =[]
    for i in set:
      arr.append(str(i))
    return list( dict.fromkeys(arr))
    
  def get_location_text(self, obj):
    set = obj.location.all()
    arr =[]
    for i in set:
      arr.append(str(i))
    return list( dict.fromkeys(arr))
  
  def get_rarity_text(self, obj):
    if obj.rarity == 'C':
      return "Common"
    elif obj.rarity == 'U':
      return "Uncommon"
    else:
      return "Rare"    