FROM nginx:alpine
MAINTAINER Marcel Eichner
EXPOSE 80/tcp

COPY public /usr/share/nginx/html
