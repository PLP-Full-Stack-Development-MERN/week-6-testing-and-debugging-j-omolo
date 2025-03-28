# Bug Tracker Frontend

This is the frontend part of the Bug Tracker application built using React. The application allows users to report, view, update, and delete bugs in a project.

## Features

- **Report New Bugs**: Users can fill out a form to report new bugs.
- **View Reported Bugs**: A list of all reported bugs is displayed.
- **Update Bug Statuses**: Users can update the status of bugs (e.g., open, in-progress, resolved).
- **Delete Bugs**: Users can delete bugs from the list.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mern-bug-tracker.git
   ```
2. Navigate to the frontend directory:
   ```
   cd mern-bug-tracker/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the frontend application, run:
```
npm start
```
This will start the development server and open the application in your default web browser.

### Running Tests

To run the unit tests for the frontend components, use:
```
npm test
```

## Folder Structure

- `src/`: Contains the source code for the application.
  - `components/`: Contains reusable components such as BugForm, BugList, and BugItem.
  - `pages/`: Contains page components like HomePage and BugDetailsPage.
  - `App.js`: Main application component that sets up routing.
  - `index.js`: Entry point for the React application.

- `tests/`: Contains unit tests for the components.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.