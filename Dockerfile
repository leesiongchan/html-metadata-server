FROM node:7

RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
    && apt-key adv --keyserver pgp.mit.edu --recv D101F7899D41F3C3 \
    && apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        yarn

WORKDIR /srv/html-metadata-server

ENV NODE_ENV production

COPY package.json ./
RUN yarn install

COPY .babelrc ./
COPY server.babel.js ./
COPY server.js ./

EXPOSE 3000
CMD ["yarn", "start"]
