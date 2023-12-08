FROM node:alpine as build
COPY . .

RUN npm install -g express

EXPOSE 8080
ENTRYPOINT ["node", "serve.cjs"]
