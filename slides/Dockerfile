FROM node:latest

VOLUME .
WORKDIR /slides
RUN npm install && npm install --global grunt-cli
EXPOSE 8000
ENTRYPOINT ["grunt", "serve"]
