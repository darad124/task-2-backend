## Introduction

This project is a RESTful API for managing `Person` documents in a MongoDB database. The API is built with Node.js, Express, and Mongoose.

## Requirements

- Node.js
- npm
- MongoDB

## Installation

1. Clone the GitHub repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.
4. Ensure your MongoDB server is running.

## Usage

1. Start the server by running `node app.js` or `npm start`.
2. The server will start on port 3000, or the port specified in your environment variables.
3. You can now make requests to the API at `http://localhost:3000/api`.

The API provides the following endpoints:

- `POST /api`: Create a new `Person` document.
- `GET /api/:id`: Read a `Person` document by ID.
- `PUT /api/:id`: Update a `Person` document by ID.
- `DELETE /api/:id`: Delete a `Person` document by ID.

For more detailed information about these endpoints, including the expected request and response formats, please refer to the [API Documentation](DOCUMENTATION.md).

## UML Diagrams

https://www.taskade.com/d/FuuzAM9Yhi5QFpAs?share=edit&edit=tgS81HzJXcfMBZMt&as=orgchart

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.

Let me know if you need more help! 😊