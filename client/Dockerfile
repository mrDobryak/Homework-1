FROM node:latest

WORKDIR /app

COPY .browserslistrc .
COPY .eslintrc.js .
COPY babel.config.js .
COPY postcss.config.js .
COPY vue.config.js .
COPY package.json .
COPY yarn.lock .

RUN yarn install