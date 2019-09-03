This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console


#CLI Commands 
https://github.com/sequelize/cli

# Create a db; migrate schema; seed data; run application 
  
1. npm install
2. psql postgres 
3. create database [carsonethemarket]
4. \c carsonthemarket 
   - \dt and you wil see there are no tables yet so now we wil migrate our schemas 
5. sequelize db:create
6. sequelize db:migrate
    - check the migration worked in postgre CLI : \dt  list the tables in the currently connected database
    - In my code you will see that i migrated updates to existing tables 
6.  sequelize db:seed:all
7. \q

8.  command for running both sides of the application, from the root directoty 
    - npm run dev
    






