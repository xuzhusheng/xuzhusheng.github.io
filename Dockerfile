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
RUN rm /etc/nginx/conf.d/default.conf
COPY *.conf /etc/nginx/conf.d/
RUN mkdir -p /var/www/app
COPY --from=build /app/dist /var/www/app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM base as subfont
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | tee /etc/apt/trusted.gpg.d/google.asc >/dev/null
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' 
RUN apt-get update && apt-get upgrade && apt-get install -y python3 python3-pip google-chrome-stable libxss1 --no-install-recommends 
RUN pip install fonttools brotli zopfli --break-system-packages 
RUN npm install -g glyphhanger
USER node