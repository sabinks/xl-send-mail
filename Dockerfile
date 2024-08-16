FROM node:18.17.0-slim

RUN apt-get update -y && apt-get install -y openssl

COPY . .

RUN npm install

RUN NODE_ENV='production' PORT=3081 npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]