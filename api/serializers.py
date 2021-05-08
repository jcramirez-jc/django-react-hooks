from rest_framework import serializers
from .models import *


class TasksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tasks
        fields = ('id', 'title', 'day', 'completed')
