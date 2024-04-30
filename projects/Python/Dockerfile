FROM python:3.10-bullseye

WORKDIR /app

COPY . /app

RUN pip install -r requirements/backend.txt

CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]
