# html-metadata-server

A simple wrapper server for [html-metadata](https://github.com/wikimedia/html-metadata).

## Getting Started

#### 1. Install Node packages

```sh
$ npm install
```

#### 2. Run the server

```sh
$ npm start
```

### Run using Docker

#### 1. Build Dockerfile

```sh
$ docker build -t html-metadata-server .
```

#### 2. Run docker

```sh
$ docker run --name html-metadata-server -p 3000:3000 -d html-metadata-server
```

### Run via docker-compose

```sh
$ docker-compose up -d
```

## Usage

`http://my.cdn.com?url=[:url]`

Example:

`http://my.cdn.com?url=https://google.com`

And it will return a JSON response of (html-metadata) object.

## Customization

#### CACHE_MAXSIZE (default: 100)

This is to configure the maximum size of cachable objects.

#### CACHE_TTL (default: 3600)

This is to configure the time-to-live of cache.

#### USER_AGENT (default: metadata-bot)

You also can customize your user agent to anything you like.

#### CORS_ALLOW_ORIGIN (default: '*')

This is to configure the Cross-origin resource sharing (CORS) - Access-Control-Allow-Origin to allows cross-domain communication from the browser.
