FROM node:18

WORKDIR /code/

COPY package*.json ./

RUN npm install
RUN npm install -g vite

COPY . .

CMD ["npm", "run", "dev"]