from django.db import models


class Post(models.Model):
    point = models.IntegerField(default=10, null=False)
    recipients = models.JSONField(default=list)
    hashtags = models.JSONField(default=list, null=True)
    comments = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='photos/user_form', null=True, max_length=255)


    def __str__(self):
        return "%s %s %s %s" %(self.point, self.recipients, self.comments, self.hashtags)
