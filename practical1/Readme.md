# Social Media RESTful API

This project is a RESTful API developed for a social media platform similar to Instagram. It allows users to perform core social media actions such as creating posts, adding comments, liking content, and following other users.

## Overview
* Built using Node.js and Express
* Follows RESTful API design principles
* Uses proper HTTP methods (GET, POST, PUT, DELETE)
* Returns appropriate status codes and structured responses

## Objectives
* Design clean and structured API endpoints
* Implement CRUD operations for all resources
* Handle requests and responses properly
* Use middleware for error handling and formatting
* Provide basic API documentation

## Technologies Used
* Node.js
* Express.js
* Morgan (logging)
* CORS (cross-origin support)
* Helmet (security)
* Nodemon (development tool)

## Project Structure

* controllers → handles logic
* routes → defines endpoints
* middleware → handles errors and formatting
* utils → helper functions and mock data
* public → contains documentation page
* server.js → main entry point

## Setup Instructions

* Create project folder and initialize npm
* Install dependencies: express, morgan, cors, helmet
* Install dev dependency: nodemon
* Create `.env` file and set PORT

## Running the Server

* Run command: npm run dev
* Server runs on: http://localhost:3000

## API Endpoints

### Users

* GET /users → get all users
* GET /users/:id → get single user
* POST /users → create user
* PUT /users/:id → update user
* DELETE /users/:id → delete user

### Posts

* GET /posts
* GET /posts/:id
* POST /posts
* PUT /posts/:id
* DELETE /posts/:id

### Comments

* GET /comments
* POST /comments
* DELETE /comments/:id

### Likes

* POST /likes
* DELETE /likes/:id

### Followers

* POST /followers
* DELETE /followers/:id

## Example Request

* POST /users
* Body:
  {
  "username": "user1",
  "email": "[user1@test.com](mailto:user1@test.com)",
  "password": "123456"
  }

## Example Response

{
"success": true,
"data": {
"id": 1,
"username": "user1"
}
}

## Features

* RESTful API structure
* CRUD functionality
* Middleware-based architecture
* Error handling
* Content negotiation support

## Testing

* Use Postman
* Use Thunder Client

## Notes

* Uses mock data (no database)
* Designed for learning REST API concepts

## Author

Your Name
# Social Media RESTful API

This project is a RESTful API developed for a social media platform similar to Instagram. It allows users to perform core social media actions such as creating posts, adding comments, liking content, and following other users.

## Overview

* Built using Node.js and Express
* Follows RESTful API design principles
* Uses proper HTTP methods (GET, POST, PUT, DELETE)
* Returns appropriate status codes and structured responses

## Objectives

* Design clean and structured API endpoints
* Implement CRUD operations for all resources
* Handle requests and responses properly
* Use middleware for error handling and formatting
* Provide basic API documentation

## Technologies Used

* Node.js
* Express.js
* Morgan (logging)
* CORS (cross-origin support)
* Helmet (security)
* Nodemon (development tool)

## Project Structure

* controllers → handles logic
* routes → defines endpoints
* middleware → handles errors and formatting
* utils → helper functions and mock data
* public → contains documentation page
* server.js → main entry point

## Setup Instructions

* Create project folder and initialize npm
* Install dependencies: express, morgan, cors, helmet
* Install dev dependency: nodemon
* Create `.env` file and set PORT

## Running the Server

* Run command: npm run dev
* Server runs on: http://localhost:3000

## API Endpoints

### Users

* GET /users → get all users
* GET /users/:id → get single user
* POST /users → create user
* PUT /users/:id → update user
* DELETE /users/:id → delete user

### Posts

* GET /posts
* GET /posts/:id
* POST /posts
* PUT /posts/:id
* DELETE /posts/:id

### Comments

* GET /comments
* POST /comments
* DELETE /comments/:id

### Likes

* POST /likes
* DELETE /likes/:id

### Followers

* POST /followers
* DELETE /followers/:id

## Example Request

* POST /users
* Body:
  {
  "username": "user1",
  "email": "[user1@test.com](mailto:user1@test.com)",
  "password": "123456"
  }

## Example Response

{
"success": true,
"data": {
"id": 1,
"username": "user1"
}
}

## Features

* RESTful API structure
* CRUD functionality
* Middleware-based architecture
* Error handling
* Content negotiation support

## Testing

* Use Postman
* Use Thunder Client

## Notes

* Uses mock data (no database)
* Designed for learning REST API concepts

## Author

Your Name
