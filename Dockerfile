FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:cd616737260f5599c56925c11624395b6821c5ec

COPY ./out /usr/share/nginx/html
