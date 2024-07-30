# Express Application

## Описание

Этот проект представляет собой простое API, написанное на Node.js с использованием фреймворка Express. Приложение слушает на порту 3001 и предоставляет базовый функционал веб-сервера.

## Требования

- Node.js >= 14.x
- npm (или yarn)

## Установка и запуск

### Локальный запуск

npm install

npm start


## Запуск в Docker

docker build -t dzeh-express-app .

docker run -p 3001:3001 dzeh-express-app