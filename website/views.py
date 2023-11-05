from django.shortcuts import render

def home(request):
    context = {
        'title': "Home page"
    }

    return render(request, 
                  template_name='home.html', 
                  context=context)