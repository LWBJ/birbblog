from django.contrib import admin
from dataapis.models import BirbSighting, Location, Species

# Register your models here.

class BirbSightingAdmin(admin.ModelAdmin):
  list_display = ('species', 'location', 'date')
  
class LocationAdmin(admin.ModelAdmin):
  list_display = ('name',)
  
class SpeciesAdmin(admin.ModelAdmin):
  list_display = ('name', 'some_locations')

admin.site.register(BirbSighting, BirbSightingAdmin)
admin.site.register(Location, LocationAdmin)
admin.site.register(Species, SpeciesAdmin)