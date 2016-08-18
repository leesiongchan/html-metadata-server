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

```yaml
version: '2'

services:
  html-metadata-server:
    image: ahlee2326/html-metadata-server
    ports:
      - "3000:3000"
    environment:
      - CACHE_MAXSIZE=100
      - CACHE_TTL=3600
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

This is to the time-to-live of cache.
