# Standard server-structure

### Clean Co API

Clean Co API is a Node.js-based RESTful API for managing cleaning service bookings. This API allows users to fetch available services, create new bookings, and manage user authentication with JWT tokens.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /api/v1/](#get-apiv1)
  - [GET /api/v1/services](#get-apiv1services)
  - [GET /api/v1/user/bookings](#get-apiv1userbookings)
  - [POST /api/v1/auth/access-token](#post-apiv1authaccess-token)
  - [POST /api/v1/user/create-booking](#post-apiv1usercreate-booking)
  - [DELETE /api/v1/user/cancel-booking/:bookingId](#delete-apiv1usercancel-bookingbookingid)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js v14.x or higher
- MongoDB v4.x or higher

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/clean-co-api.git
   cd clean-co-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory and add the following environment variables:

   ```code
    MONGODB_URI= your_mongodb_connection_string
    ACCESS_TOKEN_SECRET= your_jwt_secret
    PORT= port_number
   ```

## Usage

1. Start the server:

   ```bash
   npm run dev
   ```

2. The API will be available at http://localhost:<PORT>/api/v1

## API Endpoints

#### GET /api/v1/

Welcome route to test the connection.

- Response:

  ```json
  {
    "message": "Welcome to Clean Co API"
  }
  ```

#### GET /api/v1/services

Fetch all available cleaning services. Requires a valid JWT token.

- Cookies:
  Authorization: Bearer <token>

- Response:

  ```json
  [
    {
      "_id": "60d5f67f5b9e3f3f4a3d0e3d",
      "name": "House Cleaning",
      "description": "Thorough cleaning of the entire house.",
      "price": 100,
      "features": ["Dusting", "Mopping", "Vacuuming"]
    }
  ]
  ```

#### GET /api/v1/user/bookings

Fetch all bookings for the authenticated user. Requires a valid JWT token.

- Cookies:
  Authorization: Bearer <token>

- Query Parameters:
  email: The email of the user whose bookings are to be fetched.

- Response:

  ```json
  [
    {
      "id": "60d5f67f5b9e3f3f4a3d0e3d",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      "address": "123 Main St",
      "serviceName": "House Cleaning",
      "serviceDescription": "Thorough cleaning of the entire house.",
      "servicePrice": 100,
      "serviceFeatures": ["Dusting", "Mopping", "Vacuuming"],
      "createdAt": "2023-07-08T14:48:00.000Z"
    }
  ]
  ```

#### POST /api/v1/auth/access-token

Generate a JWT access token for the user.

- Request Body:

  ```json
  {
    "email": "john.doe@example.com"
  }
  ```

- Response:
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

#### POST /api/v1/user/create-booking

Create a new booking for the user.

- Request Body:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "serviceName": "House Cleaning",
    "serviceDescription": "Thorough cleaning of the entire house.",
    "servicePrice": 100,
    "serviceFeatures": ["Dusting", "Mopping", "Vacuuming"]
  }
  ```
- Response:

  ```json
  {
    "acknowledged": true,
    "insertedId": "60d5f67f5b9e3f3f4a3d0e3d"
  }
  ```

#### DELETE /api/v1/user/cancel-booking/

Delete a booking by its ID.

- Response:
  ```json
  {
    "acknowledged": true,
    "deletedCount": 1
  }
  ```

## Project Structure
```bash
clean-co-api/
├── config/
│   ├── db.js              # Database connection and collection handling
├── middleware/
│   ├── auth.js            # JWT verification middleware
│   ├── logger.js          # Logger middleware
├── routes/
│   ├── cleanCoRoutes.js   # All API routes
├── .env.example           # Example environment variables file
├── .gitignore             # Git ignore file
├── index.js               # Entry point of the application
├── package.json           # Node.js dependencies and scripts
└── README.md              # Project documentation
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

&copy; Md Shakil Hossain ~ 2024 
