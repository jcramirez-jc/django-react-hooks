from django.db import models


# Create your models here.
class Tasks(models.Model):

    title = models.TextField(max_length=80, blank=True, default='')
    day = models.TextField(max_length=80, blank=True, default='')
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

