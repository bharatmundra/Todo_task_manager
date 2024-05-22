
FROM node:19-alpine3.15

WORKDIR /todo

COPY . /todo

RUN npm install 

EXPOSE 3000

CMD ["npm","run","dev"]
