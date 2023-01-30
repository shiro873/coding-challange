FROM node:16 as build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
# RUN npm ci --no-progress --no-optional --silent
RUN npm i
COPY . .
# Start app
CMD [ "npm", "run" ,"start" ]
# EXPOSE 80
