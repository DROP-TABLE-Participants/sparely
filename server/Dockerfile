FROM node:18

WORKDIR /code/

COPY package*.json ./

ENV NPM_CONFIG_CACHE=/code/.npm

RUN chown -R node:node /code/

RUN npm install

RUN npm install ts-node -g
RUN npm install -g @nestjs/cli

COPY . .

CMD ["npm", "run", "start:dev"]