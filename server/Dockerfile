FROM node:22.5.1-alpine

WORKDIR /server

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm","run","start"]




