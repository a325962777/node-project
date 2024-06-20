# Business Management API

This is a RESTful API for managing a small business, built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- CRUD operations for businesses and products
- JWT-based authentication
- Middleware for protecting routes
- Global error handling
- Environment variables support
- Logging with log4js
- Unit tests with Jest and Supertest

## Installation

1. Clone the repository:

```bash
git clone https://github.com/a325962777/node-project.git
cd node-project
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add the following variables:

```dotenv
PORT=3000
MONGODB_URI=mongodb://0.0.0.0:27017/
JWT_SECRET=avi&michalSecretKey12345
```

4. Start the server:

```bash
node app.js
```

5. Run tests:

```bash
npm test
```

## Endpoints

### Auth

- `POST /api/users/signup` - Sign up a new user
- `POST /api/users/signin` - Sign in an existing user

### Business

- `POST /api/business` - Create a new business (Admin only)
- `PUT /api/business/:id` - Update an existing business (Admin only)
- `GET /api/business` - Get all business (Admin only)

### Services

- `POST /api/services` - Create a new service (Admin only)
- `PUT /api/services/:id` - Update an existing service (Admin only)
- `GET /api/services` - Get all services
  
 ### Meetings

- `POST /api/meetings` - Create a new meeting 
- `PUT /api/meetings/:id` - Update an existing meeting (Admin only)
- `GET /api/meetings` - Get all meetings
  
  ### Users

- `POST /api/users` - Create a new user 
- `PUT /api/users/:id` - Update an existing user 
- `GET /api/users` - Get all users
  
## License

This project is licensed under the MIT License.
