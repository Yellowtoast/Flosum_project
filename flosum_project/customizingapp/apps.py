from django.apps import AppConfig


class CustomizingappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'customizingapp'
