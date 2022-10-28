# Sample Web Application

Sample Web Application API Project

## Table Of Contents

-   [Prerequisites](#prerequisites-anchor)
-   [API Documentation](#api-documentation-anchor)
-   [Run Application](#run-application-anchor)
-   [Test](#test-anchor)
-   [Security](#security-anchor)

<a name="prerequisites-anchor"></a>

## Prerequisites

-   [Node 19+](https://nodejs.org/en/)
-   [Docker](https://docs.docker.com/get-docker/)

<a name="api-documentation-anchor"></a>

## API Documentation

#### Generate API Documentation (REDOC)

`yarn docs:redoc`

-   Static HTML file of the application documentation can be found in `$PROJECT_ROOT/docs/sample-web-application-api-docs.html`
-   The REDOC documentation can be reached [here](http://localhost:8080/api-docs) once the application is up and running.
-   The SWAGGER documentation can be reached [here](http://localhost:8080/api-docs-swagger) once the application is up and running.

<a name="run-application-anchor"></a>

## Run Application

There are several ways to run the application

1. Yarn

`yarn server:start`

2. pm2

`yarn server:start:pm2`

3. docker

-   Create docker image

`docker build --no-cache -t sample-web-application:latest .`

-   Run application

`docker run -p=8080:8080 sample-web-application:latest`

4. docker-compose

`docker-compose up -d --build`

<a name="test-anchor"></a>

## Test

-   Run tests

`yarn test`

-   Run tests with coverage

`yarn test:coverage`

<a name="security-anchor"></a>

## Security

TBD
