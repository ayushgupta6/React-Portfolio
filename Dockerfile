FROM node:12.2.0-alpine
WORKDIR app
COPY . .
RUN npm install
RUN npm install -D tailwindcss
RUN npm start
EXPOSE 3000
