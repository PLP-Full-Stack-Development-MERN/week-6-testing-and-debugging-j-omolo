# MERN Bug Tracker

This is a Bug Tracker application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to report, view, update, and delete bugs in a project.

## Features

- Users can report new bugs by filling out a form.
- Users can view a list of all reported bugs.
- Users can update the status of bugs (e.g., open, in-progress, resolved).
- Users can delete bugs.

## Project Structure

```
mern-bug-tracker
├── backend                # Backend server
│   ├── src
│   │   ├── controllers    # Controllers for handling requests
│   │   ├── models         # Mongoose models
│   │   ├── routes         # API routes
│   │   └── app.js         # Entry point for the backend
│   ├── tests              # Tests for backend functionality
│   ├── package.json       # Backend dependencies and scripts
│   └── README.md          # Documentation for the backend
├── frontend               # Frontend application
│   ├── src
│   │   ├── components      # React components
│   │   ├── pages          # React pages
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point for the frontend
│   ├── tests              # Tests for frontend components
│   ├── package.json       # Frontend dependencies and scripts
│   └── README.md          # Documentation for the frontend
├── README.md              # Overall project documentation
└── .gitignore             # Git ignore file
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-bug-tracker
   ```

2. Set up the backend:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```

3. Set up the frontend:
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

### Running Tests

- To run backend tests:
  ```
  cd backend
  npm test
  ```

- To run frontend tests:
  ```
  cd frontend
  npm test
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.