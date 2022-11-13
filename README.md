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
-   [MongoDB 6.0+](https://www.mongodb.com/)
-   [Docker](https://docs.docker.com/get-docker/)

<a name="api-documentation-anchor"></a>

## API Documentation

#### Generate API Documentation (REDOC)

`yarn docs:redoc`

-   Static HTML file of the application documentation can be found in `$PROJECT_ROOT/docs/sample-web-application-api-docs.html`
-   The REDOC documentation can be reached [here](http://localhost:8080/api-docs) once the application is up and running with default credentials: Username `admin`, Password: `password`
-   The SWAGGER documentation can be reached [here](http://localhost:8080/api-docs-swagger) once the application is up and running with default credentials: Username `admin`, Password: `password`

<a name="run-application-anchor"></a>

## Run Application

There are several ways to run the application

1. Yarn

`yarn server:start`

2. pm2

`yarn server:start:pm2`

3. docker

-   Create a network

`docker network create sample-web-application_network`

-   Start a MongoDB server instance

`docker run --network sample-web-application_network --name sample-web-application_db -p 27017:27017 -d --restart unless-stopped mongo:6.0`

-   Create docker image

`docker build --no-cache -t sample-web-application:latest .`

-   Run application

`docker run --network sample-web-application_network -p=8080:8080 -d sample-web-application:latest`

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

A valid JWT token is required to call secured apis.

### To get a sample JWT Bearer Token

JWT Token can be generated [here](https://jwt.io/)

-   HEADER:ALGORITHM & TOKEN TYPE

    ```json
    {
        "alg": "HS256",
        "typ": "JWT"
    }
    ```

-   PAYLOAD:DATA

    -   'expiration' value should be in seconds. [The current Unix epoch time](https://www.epochconverter.com/) value can be used.
    -   Application extends the token expiration time by 30 minutes more than the set value by default for demonstration.

    ```json
    {
        "origin": "sample_web_application",
        "expiration": 1667001938
    }
    ```

-   VERIFY SIGNATURE

    -   Replace 'your-256-bit-secret' with 'sample_web_application_secret'
    -   Uncheck 'secret' box

    ```
    HMACSHA256(
        base64UrlEncode(header) + "." +
        base64UrlEncode(payload),

        sample_web_application_secret

    ) [ ] secret base64 encoded
    ```

-   JWT Token is ready to use in the left box.
