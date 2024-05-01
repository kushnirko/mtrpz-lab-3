FROM golang:1.17-alpine

WORKDIR /app

COPY go.mod go.sum .
RUN go mod download

COPY . .

RUN go build -o build/fizzbuzz

# tree util will help to more conveniently analyze image content
RUN apk add --no-cache tree

CMD ["./build/fizzbuzz", "serve"]
