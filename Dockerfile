FROM node:alpine

WORKDIR /app

COPY ./client/package.json /app/

COPY ./client/yarn.lock /app/

RUN npm install yarn -g

RUN cd app && yarn install --frozen-lockfile

COPY ./client /app

RUN yarn build:prod

RUN yarn global add serve

CMD ["serve", "-s", "./app/build/"]
