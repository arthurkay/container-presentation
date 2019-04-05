# CONTAINER ORCHESTRATION

![Docker Logo](https://1000logos.net/wp-content/uploads/2017/07/Docker-Logo.png)

## DOCKER & DOCKER COMPOSE

> Author: Arthur Kalikiti

> Email: arthur@kalikiti.net

> Website: https://arthur.kalikiti.net


### INTRODUCTION

>In computing Container Orchestration is the automated configuration, coordination, and management of computer systems and software.

To this, there are a number of tools one can use. These include:

- LXD
- Rkt
- OpenVZ
- Linux VServer
- Docker

This example only talks about [Docker](https://docker.com) and [Docker compose](https://docs.docker.com/compose).

In this code base there are two (2) docker container files, the rest is just code that is required to run a NodeJS app (JavaScript on the backend). I also used the ejs templating engine for the views.
`Note:` You can use any programming language, and any type of application can be containerised.

### DOCKER

Docker is the container orchestration tool used in this project to build an ubuntu container, with nodejs, npm, and all its dependencies.
Below is an example of how to structure the Dockerfile with container build instructions.

```
FROM ubuntu

RUN apt-get update -y && \
    apt-get install nodejs npm -y

COPY . /var/www/html

WORKDIR /var/www/html

CMD ["node", "app.js"]
```

The `FROM` tag is used to tell docker what image to build your container on.

The `RUN` commands to executes commands inside the container once its built.

The `COPY` to copy files from the local machine into the container.

The `WORKDIR` to create set a directory where the following commands will be run from.

The `CMD` to pass the command and parameters to be run up[on successful container build and configurations.


### DOCKER-COMPOSE

Docker-commpose is used for creating multiple containers as servies and a virtual network that allows services running in standalone containers to communicate with each other.
You don't have to worry about setting up a network, docker-compose handles that for you.
[Docker-compose](https://github.com/arthurkay/container-presentation/blob/copy/docker-compose.yaml) is built in a similar manner, only it builds multiple containers at once, while the [Dockerfile](https://github.com/arthurkay/container-presentation/blob/copy/Dockerfile) only builds one container.

It is also considered and industry standard to put one service per container. Hence, the reason to run the below services in separate containers.

Below is a snippet of what is found in a `Docker-compose.yml` file.

```
version: '3'
services:

  web:
    build: .
    ports:
      - 8090:8001
    volumes:
      - .:/var/www/html/
    restart: always
    depends_on: 
      - dataStore
```

The docker compose file is written in 'yaml' `(Yet Another Markup Language)`. And it starts by decalring the yaml version used, in this case version 3.

The `services` indicates the beginning of service delarations.

The `web` can have any name, this is just the service name, it is also what will be used for name resolution by the virtual networks DNS. for example to have another service call this service, one just needs to invoke `http://web`. The virtual network is smart enough to resolve to this service with just that URL.

The `build` sometimes `image` indicates the base image for this service. In this example a `.` was used to indicate we are inheriting this image from a [Dockerfile](https://github.com/arthurkay/container-presentation/blob/copy/Dockerfile). If we had not used `Dockerfile` as the name of this file, we where supposed to put the name used, otherwise `Dockerfile` is the default name and hence no need to mention it.

If we use `image` instead of `build` we are telling docker to essentially download a container from the [Docker Hub](https://hub.docker.com).

The `ports` indicate the mapping of ports from container to host. The first port is used to access the conatiner on the portits listening in internally.

The `volumes` is used to mapp a host file system into the container, this allows our app to persist data beyond the container life cycle.

The `restart` tells the container to start if it goes off, by technical fault.

The `depends_on` flag tells the service to start the service it depends on if that service is not available.

This project contains three (3) container services.

- web
- dataStore
- adminer

### web

The web service is inherited from the image built by docker in the [Dockerfile](https://github.com/arthurkay/container-presentation/blob/copy/Dockerfile)

The orchestration of the virtual network and name resolution is handled by [Docker-compose](https://github.com/arthurkay/container-presentation/blob/copy/docker-compose.yaml) to create an application that is decoupled in architecture, but still runs like a tradition application.

This is the core app

### dataStore

The dataStore is a service name of the MySQL container. This container has a MySQL database attached to it and volume mappings to the local machine.

### adminer

Adminer is in many ways similar to the traditional `phpmyadmin`. Only adminer is loosely coupled with the the programming language being used.
This tool allows as to be able to communicate with the database using a web GUI.
Among the databases supported are:

- MySQL
- MsSQL
- SQLite
- Postgres

e.t.c.

## SERVICES

Services in cloud native apps are the components of standalone parts that communicate with other services to make a complete system.

This system has a virtual network and name resolution based on the service names.
e.g. If in my web service, I need to access the mysaql database which in this case is running in a standalone container, I would access my database has `http://dataStore`. This URL is only valid for services that are built and running from a single docker-compose instance.

If there is need to access these containers outside of docker-compose's network, then one needs to use the `host machines` IP address and port number mapped to be accessible from the outside world.

## WHY CHOOSE CONTAINERS

Traditionally every time one moves code from one machine to another, there is always need to do reconfigurations and making sure that all platform specific logic is taken care of, otherwise issues arise.

Because containers don't only store your applications code, but also its dependencies, one can rest assured that it will run without any configurations provided a container orchestartion tool is available on that machine.

Containers also solve the issues of having to to make sure that your code runs on all platforms, because the container acts a sand box to contain your code, configurations, dependecies and other necessities of your application.


### WHERE CAN I RUN DOCKER

Docker runs on the major operating systems, i.e:

- Windows
- MacOS
- Linux

### HOW TO BUILD THIS APP

All that is needed ,for one to build this app is to open the top level directory of this project on a machine with docker installed and typing the command `Docker-compose up`.
Dependending on your configurations, you might need to append sudo before the command.
