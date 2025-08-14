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

# Captain API Endpoints

## Endpoint: `/captain/register`

### Description
Registers a new captain in the system. Validates input data, hashes the password, stores the captain in the database, and returns an authentication token.

### Method
`POST`

### Request Body
Send as JSON:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "password": "yourPassword",
  "vehicle": {
    "color": "red",
    "plate": "LE-59",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Field Requirements
- `fullname.firstname`: string, required, minimum 3 characters
- `fullname.lastname`: string, required, minimum 3 characters
- `email`: string, required, must be a valid email
- `password`: string, required, minimum 6 characters
- `vehicle.color`: string, required, minimum 3 characters
- `vehicle.plate`: string, required, minimum 3 characters
- `vehicle.capacity`: number, required, minimum 1
- `vehicle.vehicleType`: string, required, must be one of `car`, `motorcycle`, `auto`

### Success Response
- **Status Code:** `201 Created`
- **Body:**

```json
{
  "token": "<JWT token>",
  "captain": {
    "_id": "...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "LE-59",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other fields
  },
  "message": "Captain created successfully"
}
```

### Error Responses
- **Status Code:** `400 Bad Request`
  - Invalid input data (validation errors)
  - Captain already exists
- **Status Code:** `500 Internal Server Error`
  - Server or database error

### Example Request (Postman)
```
POST http://localhost:4000/captain/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "password": "yourPassword",
  "vehicle": {
    "color": "red",
    "plate": "LE-59",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

## Endpoint: `/captain/login`

### Description
Authenticates a captain and returns a JWT token if credentials are valid.

### Method
`POST`

### Request Body
Send as JSON:
```json
{
  "email": "john.captain@example.com",
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
  "captain": {
    "_id": "...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "LE-59",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other fields
  }
}
```

### Error Responses
- **Status Code:** `400 Bad Request`
  - Invalid input data (validation errors)
- **Status Code:** `401 Unauthorized`
  - Invalid email or password
- **Status Code:** `500 Internal Server Error`
  - Server or database error

### Example Request (Postman)
```
POST http://localhost:4000/captain/login
Content-Type: application/json

{
  "email": "john.captain@example.com",
  "password": "yourPassword"
}
```

---

## Endpoint: `/captain/profile`

### Description
Returns the authenticated captain's profile information. Requires a valid JWT token (sent via cookie or Authorization header).

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
  "email": "john.captain@example.com",
  "vehicle": {
    "color": "red",
    "plate": "LE-59",
    "capacity": 4,
    "vehicleType": "car"
  }
  // ...other fields
}
```

### Error Responses
- **Status Code:** `401 Unauthorized`
  - Missing or invalid token

### Example Request (Postman)
```
GET http://localhost:4000/captain/profile
Authorization: Bearer <JWT token>
```

---

## Endpoint: `/captain/logout`

### Description
Logs out the captain, blacklists the token, and clears the cookie.

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
GET http://localhost:4000/captain/logout
Authorization: Bearer <JWT token>
```

---

## Endpoint: `/rides/create`

### Description

Creates a new ride request for the authenticated user. This endpoint validates the pickup and destination addresses, ensures the selected vehicle type is supported, and associates the ride with the requesting user. It returns the created ride details and a confirmation message.

### Method

`POST`

### Request Headers

- `Authorization: Bearer <JWT token>` (or cookie named `token`)

### Request Body

Send as JSON:
```json
{
  "userId": "USER_ID_STRING",
  "pickup": "123 Main St, City",
  "destination": "456 Park Ave, City",
  "vehicleType": "car"
}
```
- `userId`: string, required, user’s unique ID
- `pickup`: string, required, minimum 3 characters
- `destination`: string, required, minimum 3 characters
- `vehicleType`: string, required, must be one of `auto`, `car`, `moto`

### Success Response

- **Status Code:** `201 Created`
- **Body:**
```json
{
  "message": "Ride created successfully",
  "ride": {
    "_id": "...",
    "user": "...",
    "pickup": "123 Main St, City",
    "destination": "456 Park Ave, City",
    "vehicleType": "car",
    "fare": "Rs: 225"
    // ...other fields
  }
}
```

### Error Responses

- **Status Code:** `400 Bad Request`
  - Validation errors (invalid or missing fields)
- **Status Code:** `500 Internal Server Error`
  - Server/database error

### Example Request (Postman)
```
POST http://localhost:4000/rides/create
Authorization: Bearer <JWT token>
Content-Type: application/json

{
  "userId": "64f1c2e9b7e2a1a2b3c4d5e6",
  "pickup": "123 Main St, City",
  "destination": "456 Park Ave, City",
  "vehicleType": "car"
}
```

---

## Endpoint: `/maps/get-coordinates`

### Description

Retrieves the latitude and longitude for a given address. This endpoint is useful for converting a human-readable address into geographic coordinates, which can then be used for mapping or distance calculations.

### Method

`GET`

### Request Headers

- `Authorization: Bearer <JWT token>` (or cookie named `token`)

### Query Parameters

- `address`: string, required, minimum 3 characters

### Success Response

- **Status Code:** `200 OK`
- **Body:**
```json
{
  "lat": 28.7041,
  "lng": 77.1025
}
```

### Error Responses

- **Status Code:** `400 Bad Request`
  - Validation errors or missing address
- **Status Code:** `500 Internal Server Error`
  - Error fetching coordinates

### Example Request (Postman)
```
GET http://localhost:4000/maps/get-coordinates?address=COMSATS%20University
Authorization: Bearer <JWT token>
```

---

## Endpoint: `/maps/get-distance-time`

### Description

Calculates the distance and estimated travel time between two locations. This endpoint is helpful for fare estimation and route planning, using the provided origin and destination addresses.

### Method

`GET`

### Request Headers

- `Authorization: Bearer <JWT token>` (or cookie named `token`)

### Query Parameters

- `origin`: string, required, minimum 3 characters
- `destination`: string, required, minimum 3 characters

### Success Response

- **Status Code:** `200 OK`
- **Body:**
```json
{
  "distance": "12 km",
  "duration": "25 mins"
}
```

### Error Responses

- **Status Code:** `400 Bad Request`
  - Validation errors or missing parameters
- **Status Code:** `500 Internal Server Error`
  - Error fetching distance and time

### Example Request (Postman)
```
GET http://localhost:4000/maps/get-distance-time?origin=COMSATS%20University&destination=Liberty%20Market
Authorization: Bearer <JWT token>
```

---

## Endpoint: `/maps/get-suggestions`

### Description

Provides autocomplete suggestions for location input. This endpoint helps users quickly find and select addresses or places as they type, improving the user experience for entering pickup or destination locations.

### Method

`GET`

### Request Headers

- `Authorization: Bearer <JWT token>` (or cookie named `token`)

### Query Parameters

- `input`: string, required, minimum 3 characters

### Success Response

- **Status Code:** `200 OK`
- **Body:**
```json
[
  "COMSATS University, Defence Road, Lahore",
  "Gulberg III, Near Liberty Market, Lahore",
  "Johar Town, Near Expo Center, Lahore"
]
```

### Error Responses

- **Status Code:** `400 Bad Request`
  - Validation errors or missing input
- **Status Code:** `500 Internal Server Error`
  - Error fetching suggestions

### Example Request (Postman)
```
GET http://localhost:4000/maps/get-suggestions?input=COMSATS
Authorization: Bearer <JWT token>
```




