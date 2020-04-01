#! /bin/bash

docker build -t git-center-server 1236dheerajp/git-center-server:latest . \
  --build-arg DATABASE_URI \
  --build-arg SERVER_HOST \
  --build-arg SERVER_PORT \
  --build-arg SERVER_PROTOCOL \
  --build-arg REPOSITORIES_PATH \
  --build-arg AUTHORIZED_KEY_FILE
