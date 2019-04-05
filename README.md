# CONTAINER ORCHESTRATION

![Docker Logo](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwia1MHW6bjhAhUth-AKHSNEB10QjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252F1000logos.net%252Fdocker-logo%252F%26psig%3DAOvVaw2lNdEVRfruIexZOdwE5pB-%26ust%3D1554549322718737&psig=AOvVaw2lNdEVRfruIexZOdwE5pB-&ust=1554549322718737)

## DOCKER & DOCKER COMPOSE

> Author: Arthur Kalikiti
> Email: [Arthur's email](arthur@kalikiti.net)

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

The web service is inherited from the image built by docker in the [Dockerfile](https://github.com/arthurkay/container-presentation/blob/copy/Dockerfile)
The orchestration of the virtual network and name resolution is handled by [Docker-compose](https://github.com/arthurkay/container-presentation/blob/copy/docker-compose.yaml) to create an application that is decoupled in architecture, but still runs like a tradition application.

### HOW TO BUILD THIS APP

All that is needed ,for one to build this app is to open the top level directory of this project on a machine with docker installed and typing the command `Docker-compose up`.
Dependending on your configurations, you might need to append sudo before the command.
