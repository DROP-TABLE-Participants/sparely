FROM node:18

WORKDIR /code/

COPY package*.json ./

ENV NPM_CONFIG_CACHE=/code/.npm

RUN npm install

RUN npm install ts-node -g
RUN npm install -g @nestjs/cli

RUN chown -R node:node /code/

COPY . .

CMD ["npm", "run", "start:dev"]