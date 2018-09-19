FROM node:8.11.4

RUN mkdir -p /home/www/dnodeserver
WORKDIR /home/www/dnodeserver

COPY . /home/www/dnodeserver

RUN npm install

EXPOSE 3005

CMD node serverjs