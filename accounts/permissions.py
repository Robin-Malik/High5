from rest_framework import permissions


class IsCompanyUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.company_id == obj.company.id
