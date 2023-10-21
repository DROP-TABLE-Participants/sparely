FROM node:18

WORKDIR /code/

COPY package*.json ./

ENV NPM_CONFIG_CACHE=/code/.npm

RUN chown -R node:node /code/

RUN npm install
RUN npm install -g vite

COPY . .

CMD ["npm", "run", "dev"]