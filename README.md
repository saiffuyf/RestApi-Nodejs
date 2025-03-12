# RestApi-Nodejs-

This is a RESTful API for managing users using Node.js and MongoDB.

## Features
- Create, Read, Update, and Delete (CRUD) operations
- MongoDB for data storage
- Proper error handling

## Setup
1. Clone this repo:
   ```sh
   git clone https://github.com/saiffuyf/RestApi-Nodejs.git
   npm start

## open postman
   test this URL with given below endpoints: http://localhost:8080/


## API Endpoints
Method	Endpoint	              Description
GET	    /api/users	           Get all users
POST	    /api/users	           Create new user
GET	    /api/users/:id	     Get user by ID
PUT	    /api/users/:id	     Update user by ID
DELETE	 /api/users/:id	     Delete user by ID
