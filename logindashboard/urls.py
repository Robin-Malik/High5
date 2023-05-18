from django.urls import path,re_path, include
from django.contrib import admin
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

    path('user/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('api/login/', include('loginauth.urls')),
    path('', include('accounts.urls')),
    path('', include('home.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/v1/', include('notifications.urls')),
    path('',include('frontend.urls')),
    re_path(r".*", index)
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_title = "High5 Admin"
admin.site.site_header = "High5 Cloud Admin"
admin.site.index_title = "High5 Cloud Admin Panal"
