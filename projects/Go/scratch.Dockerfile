# Stage 1: Build the project binary
FROM golang:1.17-alpine AS builder

WORKDIR /app

COPY go.mod go.sum .
RUN go mod download

COPY . .

RUN go build -o build/fizzbuzz

# Stage 2: Copy the built binary to a new empty image
FROM scratch

COPY --from=builder /app/build/fizzbuzz .

CMD ["./fizzbuzz", "serve"]
