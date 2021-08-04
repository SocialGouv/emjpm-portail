FROM ghcr.io/socialgouv/docker/nginx4spa:6.38.4

COPY ./out /usr/share/nginx/html
