FROM node:8

RUN npm install -g dns-discovery

CMD ["dns-discovery", "listen", "--domain=dat-stack.local", "--port=53", "--ttl=30"]
