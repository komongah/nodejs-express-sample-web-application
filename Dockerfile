FROM node:19-slim

RUN apt-get -y update
RUN npm install -g pm2

# Create app directory
WORKDIR /app

# Bundle app source
ADD . .

ENV TOOL_NODE_FLAGS=--max-old-space-size=8192
RUN yarn install

EXPOSE 8080

CMD ["pm2-runtime", "dockersupport/ecosystem.config.js" ]
