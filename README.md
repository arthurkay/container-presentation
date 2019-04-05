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

This example only talks about [Docker](https://docker.com) and Docker compose.

In this code base there are two (2) docker container files, the rest is just code that is required to run a NodeJS app (JavaScript on the backend). I also used the ejs templating engine for the views.

### DOCKER

Docker is the conatiner orchestration tool used in this project to build an ubuntu container, with nodejs npm and all its dependencies.

### DOCKER-COMPOSE

Docker-commpose is used for creating multiple containers as servies and a virtual network that allows services running in standalone containers to communicate with each other.
This project contains three (3) conatiners.

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
This tool allows as t be able to communicate with the database using a web GUI.

## SERVICES

Services in cloud native apps are the components of standalone parts that communicate with other services to make a complete system.
This system has a virtual network and name resolution based on the service names.
e.g. If in my web service, I need to access the mysaql database which in this case is running in a standalone container, I would access my database has `http://dataStore`. This URL is only valid for services that are built and running from a single docker-compose instance.
If there is need to access these containers outside of docker-compose's network, then one needs to use the `host machines` IP address and port number mapped to be accessible from the outside world.

## WHY CHOOSE CONTAINERS

Traditionally every time one moves code from one machine to another, there is always need to do reconfigurations and making sure that all platform specific logic is taken care of, otherwise issues arise.

Because containers don't only store your applications code, but also its dependencies, one can rest assured that it will run without any configurations provided a container orchestartion tool is available on that machine.

Containers also solve the issues of having to to make sure that your code runs on all platforms, because the container acts a sand box to contain your code, configurations, dependecies and other necessities of your
application.


### WHERE CAN I RUN DOCKER

Docker runs on the major operating systems, i.e:

- Windows
- MacOS
- Linux

### HOW TO BUILD THIS APP

All that is needed ,for one to build this app is to open the top level directory of this project on a machine with docker installed and typing the command `Docker-compose up`.
Dependending on your configurations, you might need to append sudo before the command.
