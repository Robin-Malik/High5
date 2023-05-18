from django.urls import re_path
from logindashboard import views
#...
urlpatterns = [
re_path(r".*", views.index) # RegExpr: any character is correct
]