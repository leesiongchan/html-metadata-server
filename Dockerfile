FROM node:8

WORKDIR /srv/html-metadata-server

ENV NODE_ENV production

COPY package.json ./
RUN yarn install

COPY .babelrc ./
COPY server.babel.js ./
COPY server.js ./

EXPOSE 3000
CMD ["yarn", "start"]
