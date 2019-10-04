from django.db import models
from django.utils import timezone

# Create your models here.
class BirbSighting(models.Model):
  species = models.ForeignKey('Species', on_delete = models.SET_NULL, null=True)
  date = models.DateField(default=timezone.now)
  location = models.ForeignKey('Location', on_delete = models.SET_NULL, null=True)
  comments = models.TextField()
  
  picture = models.ImageField(blank=True, upload_to='')
  
  class Meta:
    ordering = ['-date']
  
  def __str__(self):
    return str(self.pk) + ' '+ str(self.species) + ' '+ str(self.date)
    
class Species(models.Model):
  picture = models.ImageField(blank=True, upload_to='')
  name = models.CharField(max_length=200)
  RARITY = [('C','Common'),('U','Uncommon'), ('R', 'Rare')]
  rarity = models.CharField(max_length=1, choices=RARITY)
  location = models.ManyToManyField('Location', through=BirbSighting)
  
  def __str__(self):
    return self.name
  
  def some_locations(self):
    first3 = []
    for i in self.location.all():
      first3.append(i.name)
    return first3

class Location(models.Model):
  name = models.CharField(max_length=300)
  
  def __str__(self):
    return self.name