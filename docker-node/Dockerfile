FROM mhart/alpine-node
COPY app/ /www/app/
EXPOSE 5001
WORKDIR /www/app
RUN npm install
ENTRYPOINT ["node", "/www/app/app.js"]
