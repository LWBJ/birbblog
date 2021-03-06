# Generated by Django 2.2.5 on 2019-10-03 03:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dataapis', '0003_birbsighting_comments'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Species',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('rarity', models.CharField(choices=[('C', 'Common'), ('U', 'Uncommon'), ('R', 'Rare')], max_length=1)),
            ],
        ),
        migrations.AlterField(
            model_name='birbsighting',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dataapis.Location'),
        ),
        migrations.AlterField(
            model_name='birbsighting',
            name='species',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dataapis.Species'),
        ),
        migrations.AddField(
            model_name='species',
            name='location',
            field=models.ManyToManyField(through='dataapis.BirbSighting', to='dataapis.Location'),
        ),
    ]
