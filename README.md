# CONTAINER ORCHESTRATION

## DOCKER & DOCKER COMPOSE

> Author: Arthur Kalikiti

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
This project contains three (3)_conatiners.

- web
- dataStore
- adminer

### web

The web service is inherited from the image built by docker in the [Dockerfile](Dockerfile)
The orchestration of the virtual network and name resolution is handled by [Docker-compose](Docker-compose) to create an application that is decoupled in architecture, but still runs like a tradition application.

### HOW TO BUILD THIS APP

All that is needed ,for one to build this app is to open the top level directory of this project on a machine with docker installed and typing the command `Docker-compose up`.
Dependending on your configurations, you might need to append sudo before the command.
