from django.shortcuts import render
# Create your views here.


# Creacion de la Vista - Inicio
def inicio(request):
    context = {}
    return render(request, 'sections/index.html', context)


# Creacion de la Vista - Contactos
def contactos(request):
    context = {}
    return render(request, 'sections/contactos.html', context)


# Creacion de la Vista - Nosortos
def nosotros(request):
    context = {}
    return render(request, 'sections/nosotros.html', context)


# Creacion de la Vista - Donaciones
def donaciones(request):
    context = {}
    return render(request, 'sections/donaciones.html', context)


# Creacion de la Vista - Tienda
def tienda(request):
    context = {}
    return render(request, 'sections/tienda.html', context)


# Creacion de las Vistas *Pruebas de funcionamiento/ Estilos*
# Archivo Base
def base(request):
    context = {}
    return render(request, 'base.html', context)

# NavBar
def navbar(request):
    context = {}
    return render(request, 'components/navbar.html', context)

# Footer
def footer(request):
    context = {}
    return render(request, 'components/footer.html', context)