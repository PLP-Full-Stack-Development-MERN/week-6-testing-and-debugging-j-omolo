# Backend Bug Tracker API

This is the backend for the Bug Tracker application built using the MERN stack. The backend is responsible for handling all the API requests related to bug management, including creating, updating, retrieving, and deleting bugs.

## Features

- **Create Bug**: Users can report new bugs by sending a POST request to the `/bugs` endpoint.
- **Get Bugs**: Users can retrieve a list of all reported bugs by sending a GET request to the `/bugs` endpoint.
- **Update Bug**: Users can update the status of a bug by sending a PUT request to the `/bugs/:id` endpoint.
- **Delete Bug**: Users can delete a bug by sending a DELETE request to the `/bugs/:id` endpoint.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing bug data.
- **Mongoose**: ODM library for MongoDB to define schemas and models.
- **Jest**: Testing framework for running unit and integration tests.
- **Supertest**: Library for testing HTTP servers in Node.js.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-bug-tracker/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `src/app.js`.

4. Start the server:
   ```
   npm start
   ```

5. Run tests:
   ```
   npm test
   ```

## API Endpoints

- `POST /bugs`: Create a new bug
- `GET /bugs`: Retrieve all bugs
- `PUT /bugs/:id`: Update a bug's status
- `DELETE /bugs/:id`: Delete a bug

## Testing

The backend includes unit tests for the bug controller and integration tests for the bug routes. To run the tests, use the command:
```
npm test
```

## License

This project is licensed under the MIT License.