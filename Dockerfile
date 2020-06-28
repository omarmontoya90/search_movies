FROM node:12.18-slim

RUN mkdir /search_movies
WORKDIR /search_movies

COPY ./start-exec.sh /search_movies/

ENTRYPOINT ["./start-exec.sh"]
