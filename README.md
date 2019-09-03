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

Step 1: install postgres and create a Databsae. In the CLI 
npm install


Type psql postgres or \q to exit 
1. create database [databasename] ;
If you make a mistake 
  drop database [databasename] ;

2. create database [carsonethemarket]
3. \c carsonthemarket 
   - \dt and you wil see there are no tables yet so now we wil migrate our schemas 
4. sequelize db:create
5. sequelize db:migrate
    - check the migration worked in postgre CLI : \dt  list the tables in the currently connected database
    - In my code you will see that i migrated updates to existing tables 
6.  sequelize db:seed:all

7.  command for running both sides of the application, from the root directoty 
    - npm run dev
    







notes to self (refacotring)
// reptitive code in seed file for Car
// could make my express server a proxy one for front end to check if its running 
// want to look at udemy video on how to organise the module import correctly . It will take time to find the vid 
