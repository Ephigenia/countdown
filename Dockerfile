FROM nginx:alpine
LABEL maintainer="love@ephigenia.de"
EXPOSE 80/tcp

COPY public /usr/share/nginx/html
