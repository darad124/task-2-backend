# API Documentation

## Overview

This document provides detailed information about the Person API, which is a RESTful API for creating, reading, updating, and deleting (CRUD) `Person` documents in a MongoDB database. The API is built with Node.js and Express, and uses Mongoose for object data modeling (ODM).

## Standard Formats

### Request

All requests to the API should be made as HTTP requests with the `Content-Type` header set to `application/json`. The body of the request should be a JSON object with the following format:

```json
{
  "name": "The name of the person",
  "email": "The email of the person"
}
```

### Response

The API responds with a JSON object that represents a `Person` document. The format of this object is as follows:

```json
{
  "_id": "The ID of the person",
  "name": "The name of the person",
  "email": "The email of the person",
  "__v": "The version key"
}
```

## Sample Usage

### Create a Person

To create a new `Person` document, make a POST request to `/api` with the following request body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

The server will respond with the created `Person` document:

```json
{
  "_id": "60d5ecb8b392d72a48996b79",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "__v": 0
}
```

### Read a Person

To read a `Person` document, make a GET request to `/api/:id`, where `:id` is the ID of the person. The server will respond with the requested `Person` document.

### Update a Person

To update a `Person` document, make a PUT request to `/api/:id`, where `:id` is the ID of the person. Include the fields you want to update in the request body. For example:

```json
{
  "name": "ade mola",
  "email": "ade.mola@example.com"
}
```

The server will respond with the updated `Person` document.

### Delete a Person

To delete a `Person` document, make a DELETE request to `/api/:id`, where `:id` is the ID of the person. The server will respond with the deleted `Person` document.

## Known Limitations

- The server doesn't provide any authentication or authorization. Anyone who can access the server can perform any operations on any `Person` documents.
- There's no rate limiting. This means that clients can make as many requests as they want in any period of time.
- Error messages from failed Mongoose validations are not very user-friendly.

## Setup and Deployment

1. Clone the GitHub repository.
2. Run `npm install` to install all dependencies.
3. Start your MongoDB server.
4. Run `node app.js` (or `npm start`) to start the Express server.

Let me know if you need more help! 😊