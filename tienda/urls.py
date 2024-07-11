from django.urls import path
from . import views

urlpatterns = [
    # Invocaciones de las Vistas Principales
    path('index', views.index, name='index'),
    path('contactos', views.contactos, name='contactos'),
    path('nosotros', views.nosotros, name='nosotros'),
    path('donaciones', views.donaciones, name='donaciones'),
    
    # Vista tienda invocada con el nombre 'productos'
    path('productos', views.tienda, name='productos'),

    # Vistas definidas para pruebas
    path('base', views.base, name='base'),
    path('navbar', views.navbar, name='navbar'),
    path('footer', views.footer, name='footer'),

    # Vistas de Inicio de Sesion
]