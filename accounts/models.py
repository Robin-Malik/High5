from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class MyAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, username, email, password=None):
        if not email:
            raise ValueError('User must have an email address')
        if not username:
            raise ValueError('User must have an username')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        user.is_admin = True   
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Account(AbstractUser):
    first_name = models.CharField(max_length=100, null=True, default=None)
    last_name = models.CharField(max_length=100, null=True)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=15, null=True)

    # Required
    created_date = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_anonymous = models.BooleanField(default=False)
    is_authenticated = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    objects = MyAccountManager()

    def full_name(self):
        return "%s %s" % (self.first_name, self.last_name)
        # return f'{self.first_name} {self.last_name}'

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


class Company(models.Model):
    name = models.CharField(max_length=255, null=True, default='Alcor')
    company_type = models.CharField(max_length=255, null=True)
    description = models.TextField(default='', null=True)
    created_date = models.DateTimeField(auto_now=True)
    created_user = models.ForeignKey(Account, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'company'
        verbose_name_plural = 'companies'

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE, default=1)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    manager_email = models.EmailField(null=False, default='')
    hire_date = models.DateField()
    birth_date = models.DateField()
    country = models.CharField(max_length=100, null=True)
    department = models.CharField(max_length=200)
    location = models.CharField(max_length=200, null=True)
    role = models.CharField(max_length=200, null=True)
    avtar = models.ImageField(upload_to='photos/users', blank=True)
    allowance_boost = models.IntegerField(default=200)
    user_mode = models.CharField(max_length=20, default='normal')
    created_by = models.CharField(max_length=100, default='admin')
    # update_date = models.DateTimeField(auto_now=True)
    updated_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return "%s %s" % (self.user.first_name, self.user.last_name)
