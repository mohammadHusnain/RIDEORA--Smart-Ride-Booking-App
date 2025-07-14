# RIDEORA Backend API Documentation

## Endpoint: `/users/register`

### Description

Registers a new user in the system. Validates input data, hashes the password, stores the user in the database, and returns an authentication token.

### Method

`POST`

<!--
This section describes the expected structure and content of the request body for the relevant API endpoint(s). Include details about required and optional fields, data types, and example payloads to help users construct valid requests.
-->

### Request Body

Send as JSON:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword"
}
```

#### Field Requirements

- `fullname.firstname`: string, required, minimum 3 characters
- `fullname.lastname`: string, required, minimum 3 characters
- `email`: string, required, must be a valid email
- `password`: string, required, minimum 6 characters

### Success Response

- **Status Code:** `201 Created`
- **Body:**

```json
{
  "token": "<JWT token>",
  "user": {
    "_id": "...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other fields
  },
  "message": "User created successfully"
}
```

### Error Responses

- **Status Code:** `400 Bad Request`
  - Invalid input data (validation errors)
- **Status Code:** `500 Internal Server Error`
  - Server or database error

### Example Request (Postman)

```
POST http://localhost:4000/users/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword"
}
```

---

## Endpoint: `/users/login`

### Description

Authenticates a user and returns a JWT token if credentials are valid.

### Method

`POST`

### Request Body

Send as JSON:

```json
{
  "email": "john.doe@example.com",
  "password": "yourPassword"
}
```

#### Field Requirements

- `email`: string, required, must be a valid email
- `password`: string, required, minimum 6 characters

### Success Response

- **Status Code:** `200 OK`
- **Body:**

```json
{
  "token": "<JWT token>",
  "user": {
    "_id": "...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other fields
  }
}
```

### Error Responses

- ***Status Code:*** `400 Bad Request`
  - Invalid input data (validation errors)
- **Status Code:** `401 Unauthorized`
  - Invalid email or password
- **Status Code:** `500 Internal Server Error`
  - Server or database error

### Example Request (Postman)

```
POST http://localhost:4000/users/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "yourPassword"
}
```

---

## Endpoint: `/users/profile`

### Description
Returns the authenticated user's profile information. Requires a valid JWT token (sent via cookie or Authorization header).

### Method
`GET`

### Request Headers
- `Authorization: Bearer <JWT token>` (or cookie named `token`)

### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "_id": "...",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
  // ...other fields
}
```

### Error Responses
- **Status Code:** `401 Unauthorized`
  - Missing or invalid token

### Example Request (Postman)
```
GET http://localhost:4000/users/profile
Authorization: Bearer <JWT token>
```

---

## Endpoint: `/users/logout`

### Description
Logs out the authenticated user by blacklisting the JWT token and clearing the cookie.

### Method
`GET`

### Request Headers
- `Authorization: Bearer <JWT token>` (or cookie named `token`)

### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "message": "Logged out successfully"
}
```

### Error Responses
- **Status Code:** `401 Unauthorized`
  - Missing or invalid token

### Example Request (Postman)
```
GET http://localhost:4000/users/logout
Authorization: Bearer <JWT token>
```

---

For further endpoints, see future documentation.
