FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:b5e0801f8c5e823c50a24f80fddb27ba18b2b8ea

COPY ./out /usr/share/nginx/html
