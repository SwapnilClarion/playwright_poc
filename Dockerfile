FROM ubuntu:18.04

RUN  apt update 
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN  apt update 

RUN mkdir -p /code/output
WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install


COPY . ./