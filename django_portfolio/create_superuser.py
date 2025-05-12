
import os
import django
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

# Configura Django para que puedas usar sus modelos
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project.settings')
django.setup()

# Obtener el modelo de usuario
User = get_user_model()

# Intentar crear el superusuario
try:
    if not User.objects.filter(username='daniel').exists():
        User.objects.create_superuser('daniel', 'daniel@example.com', 'D@n13l2025!')
        print("Superusuario creado exitosamente.")
    else:
        print("El superusuario ya existe.")
except ValidationError as e:
    print(f"Error al crear el superusuario: {e}")
