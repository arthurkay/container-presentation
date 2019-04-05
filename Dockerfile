FROM ubuntu

RUN apt-get update -y && \
    apt-get install nodejs npm -y

COPY . /var/www/html

WORKDIR /var/www/html

CMD ["node", "app.js"]
