"""
<<<<<<< HEAD
ASGI config for project project.
=======
ASGI config for flosum_project project.
>>>>>>> jihye_branch

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

<<<<<<< HEAD
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
=======
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'flosum_project.settings')
>>>>>>> jihye_branch

application = get_asgi_application()
