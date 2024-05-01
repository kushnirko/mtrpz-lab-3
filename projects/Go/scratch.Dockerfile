# Stage 1: Build the project binary
FROM golang:1.17-alpine AS builder

WORKDIR /app

COPY go.mod go.sum .
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 go build -ldflags '-extldflags "-static"' -o build/fizzbuzz

# Stage 2: Copy the built binary and web page layout to a new empty image
FROM scratch

COPY --from=builder /app/build/fizzbuzz .
COPY --from=builder /app/templates ./templates

CMD ["./fizzbuzz", "serve"]
