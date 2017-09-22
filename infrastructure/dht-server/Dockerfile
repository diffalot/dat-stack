FROM node:8

RUN mkdir -p /dht-server

COPY ./ /dht-server

WORKDIR /dht-server

RUN npm install
RUN npm rebuild

CMD ["node", "index.js"]
