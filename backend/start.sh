#!/bin/bash

sleep 40

cd /app
npm install

cd /app
chmod +x /app/node_modules/.bin/nodemon

cd /app
npm start


