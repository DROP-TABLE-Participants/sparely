FROM node:18

WORKDIR /code/

COPY package*.json ./

ENV NPM_CONFIG_CACHE=/code/.npm

RUN npm install
RUN npm install -g vite

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

CMD ["npm", "run", "dev"]