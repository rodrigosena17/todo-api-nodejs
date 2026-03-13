# Todo API

Simple REST API for task management built with Node.js, Express, and PostgreSQL.  
This project implements a basic CRUD system where tasks can be created, listed, updated, and deleted.

## Technologies

- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- dotenv
- cors
- nodemon

## Project Structure
```
todo-api
│
├── src
│ ├── controllers
│ │ taskController.js
│ │
│ ├── routes
│ │ taskRoutes.js
│ │
│ ├── database
│ │ connection.js
│ │
│ └── app.js
│
├── server.js
├── .env
└── package.json
```


## Setup

### 1. Clone the repository
```
git clone https://github.com/rodrigosena17/todo-api-nodejs.git
```
### 1.2 Move to folder
```
cd todo-api-nodejs
```

### 2. Install dependencies
```
npm install
```


### 3. Configure environment variables

Create a `.env` file in the root directory:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todo_db
DB_PASSWORD=password
DB_PORT=5432
```


### 4. Create the database

In PostgreSQL, create the database and table:

```
CREATE DATABASE todo_db;

CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
status VARCHAR(50) DEFAULT 'pending',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


### 5. Run the server

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

Server will run at:
```
http://localhost:3000
```

## API Endpoints

### Create a task
```
POST /tasks
```
### Get all tasks
```
GET /tasks
```

### Get task by ID
```
GET /tasks/:id
```


Body:
```
{
"title": "Task title",
"description": "Task description"
}
```

### Update a task
```
PUT /tasks/:id
```

Body:
```
{
"title": "Updated title",
"description": "Updated description",
"status": "done"
}
```

### Delete a task
```
DELETE /tasks/:id
```


## License
```
ISC
```
