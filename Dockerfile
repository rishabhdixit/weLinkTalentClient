FROM registry.gitlab.com/viseo-digital-squads/docker-nginx-node
MAINTAINER Larry Borrero <redwolfgang20@gmail.com>

RUN npm install -g angular-cli
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build

COPY default.conf /etc/nginx/conf.d/

EXPOSE 8080 4200 80
CMD ["nginx", "-g", "daemon off;"]
