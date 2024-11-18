# Usar una imagen de Node.js como base para construir la aplicación
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN ls -la /app
RUN npm install
COPY . .
RUN ls -la /app
RUN npm run build

# Usar una imagen de Nginx como base para servir la aplicación
FROM nginx:alpine
COPY --from=build /app/dist/landing-page-angular18/browser /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

