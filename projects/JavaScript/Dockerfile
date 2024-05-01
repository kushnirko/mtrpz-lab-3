FROM node:20.12.2-alpine AS builder

WORKDIR /app

COPY package*.json .
RUN npm clean-install --omit=dev

COPY . .

FROM gcr.io/distroless/nodejs20-debian11

WORKDIR /app

COPY --from=builder /app .

CMD ["lib/server.js"]
