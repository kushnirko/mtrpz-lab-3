FROM node:20.12.2-alpine

WORKDIR /app

COPY package*.json .
RUN npm clean-install --omit=dev

COPY . .

# tree util will help to more conveniently analyze image content
RUN apk add --no-cache tree

CMD ["npm", "run", "start"]
