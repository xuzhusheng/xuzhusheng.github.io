FROM node:20 as base

WORKDIR /app
COPY package*.json ./
RUN npm config set registry http://mirrors.cloud.tencent.com/npm/
RUN npm install --verbose
COPY . .

FROM base AS dev
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM base as build
RUN npm run build

FROM nginx:1.27-alpine as prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]