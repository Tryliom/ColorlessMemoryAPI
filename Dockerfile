FROM node:12.18.3-alpine3.12

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

CMD ["npm", "start"]
