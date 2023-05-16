from django.contrib import admin
from .models import Account, UserProfile, Company
from django.contrib.auth.admin import UserAdmin
from django.utils.html import format_html


class AccountAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'username', 'last_login', 'date_joined', 'is_active')
    list_display_links = ('email', 'first_name', 'last_name')
    readonly_fields = ('last_login', 'created_date')
    ordering = ('-created_date',)
    filter_horizontal = ()
    fieldsets = ()
    list_filter = ()


class UserProfileAdmin(admin.ModelAdmin):
    def thumbnail(self, object):
        return format_html('<img src="{}" width="30" style="border-redius:50%;">'.format(object.avtar.url))

    thumbnail.short_description = 'Profile Picture'
    list_display = ('thumbnail', 'company', 'id', 'department', 'role')
    list_display_links = ('thumbnail', )


class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'company_type', 'description', 'created_date')
    list_display_links = ('name', 'company_type',)


admin.site.register(Account, AccountAdmin)
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Company, CompanyAdmin)
