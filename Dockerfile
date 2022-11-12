FROM node:19-slim

RUN apt-get -y update
RUN npm install -g pm2

# Create app directory
WORKDIR /app

# Bundle app source
ADD . .

RUN chmod +x ./dockersupport/wait-for-it.sh
ENV TOOL_NODE_FLAGS=--max-old-space-size=8192
RUN yarn install

EXPOSE 8080

CMD ["./dockersupport/wait-for-it.sh", "sample-web-application_db:27017", "--", "pm2-runtime", "dockersupport/ecosystem.config.js" ]
