### SETUP BACKEND

This setup is for users using Ubuntu, as I am using one.

## How to use this template

1. Create a new project based on this template, using the 'Use this template' button

![HOW_TO_USE](https://user-images.githubusercontent.com/20372832/77003323-70966180-695d-11ea-8abe-b362d57135f3.gif)

2. Clone the app

git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git

3. cd into your project

cd YOUR_PROJECT_NAME

4. install dependencies

npm install

5. Create database, run migrations & seed data

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

6. Start server

node index.js
