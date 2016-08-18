FROM node:6

RUN npm config set --global progress false

WORKDIR /srv/html-metadata-server

ENV NODE_ENV production

COPY package.json ./
RUN npm install

COPY .babelrc ./
COPY server.babel.js ./
COPY server.js ./

EXPOSE 3000
CMD ["npm", "start"]
