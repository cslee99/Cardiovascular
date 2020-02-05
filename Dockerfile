# pull official base image
FROM python:3.7.4

# set work directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV TZ=Asia/Seoul

# install dependencies
RUN python -m pip install --upgrade pip
COPY requirement.txt /usr/src/app/requirement.txt
RUN pip install --no-cache-dir -r requirement.txt
RUN pip install django djangorestframework drf-extensions django-cors-headers gunicorn

# copy project
COPY . /usr/src/app/

# create user
COPY create_admin.py /usr/src/app/create_admin.py