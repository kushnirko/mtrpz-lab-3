FROM node:20.12.2-alpine

WORKDIR /app

COPY package*.json .
RUN npm clean-install --omit=dev

COPY . .

CMD ["npm", "run", "start"]
