# This is meant to be used from within the build folder
# use 'npm run build' to create it.

FROM node:current-alpine

ADD . /opt/app
WORKDIR /opt/app

RUN npm install serve -g

EXPOSE 3000

CMD ["/bin/sh", "-c", "serve -l 3000"]
