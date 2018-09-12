# Users Directory 

## Instructions

```
You have a Frontend team that is building a listing page that lists all the staff members of an office.

This listing page should support pagination, filtering, sorting, and a quick full-text search.
Your job is to design and create the API server which will handle the requests from the frontend.

You can use staff.json as an example dataset. Please create a SQL script to create and populate tables which will store this data.

Please add tests

Rules
- You can use Google to search for anything you need
- You can use any language or framework to implement the API server
- You must use GraphQL 
- You should query the database you created in Step 4 
- At the end of the assignment, commit and push your code to a public repository that we will have access to. - - Your repo should have instructions on how to start and test the application.
- You may ask any clarifying questions you want
- We do not expect you to fully finish everything in 2 hours. Please focus on quality.

```

## Requirements

NodeJS - V8.11.3

Postgree

## Running the Server

You will need first is to install all the packages with 

`npm install`

After all the packages are installed you just need to run the command :

`npm start`

This will start the server

For changing the enviroment variables, you just need to change the `.env` file at the root of your server.

Example : 

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=EdvisorUserDirect
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=zjRhcjdmfZluUeQn9B0A08adFyGaZqSb
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=
DB_PASSWORD=
DB_DATABASE=edvisor
HASH_DRIVER=bcrypt
```

If you need to run the migrations you will need to have adonis installed : 

`npm i -g @adonisjs/cli`

And to run the migrations : 

`adonis migration:run`


## staff.json

```json 

[
  {
    "id": "5b9943c5dbaa257fe7630655",
    "isActive": false, // 
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown", // 
    "name": "Hammond Daugherty",
    "gender": "male",// 
    "officeName": "MYOPIUM",
    "email": "hammonddaugherty@myopium.com",
    "phone": "+1 (828) 543-2948"
  },
  {
    "id": "5b9943c59a4af358e0ce862e",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "brown",
    "name": "Pickett Anderson",
    "gender": "male",
    "officeName": "ARTIQ",
    "email": "pickettanderson@artiq.com",
    "phone": "+1 (975) 410-2468"
  },
  ...
]


```
