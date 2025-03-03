FROM python:3.12-alpine
WORKDIR /app
COPY . /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000
CMD ["gunicorn", "-w", "4", "-k", "gevent", "-b", "0.0.0.0:8181" ,"app:app"]