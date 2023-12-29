# Test App

Welcome to **test_app**, a simple web application that enables users to post and view notes on a webpage without the need for persistent storage or user authentication.

## User Stories

- Users can post a note on the webpage.
- Users can view notes on the webpage.
- Notes are limited to 2048 characters.
- Notes cannot be edited or deleted once posted.
- No user registration or login is necessary.
- The app is accessible through a web browser on any device.

## Technologies

The project is built with:

- Node.js
- Express
- Bootstrap
- HTML
- CSS3
- Socket.io

## Project Structure

The current project includes the following files and directories:

- `/package.json`: Project metadata and dependencies.
- `/index.js`: Server entry point using Express and Socket.io.
- `/sockets/socket.js`: WebSocket event handling.
- `/sockets/noteHandler.js`: Note posting and broadcasting logic.
- `/public`: Client-side assets and HTML.
- `/public/index.html`: Main HTML file for the user interface.
- `/public/css/styles.css`: Custom styles for the application.
- `/public/js/app.js`: Client-side JavaScript for note posting and display.

## Setup and Installation

1. Make sure you have Node.js installed on your system.
2. Clone the repository and navigate to the root directory of the project.
3. Install dependencies by running `npm install`.
4. Start the server with `npm start`.
5. Open a web browser and visit `http://localhost:3000` to view the app.

## License

Released under the MIT License. See the accompanying LICENSE.md file for more details.

## Acknowledgements

- Thanks to everyone who has contributed to the development and maintenance of this app.
- Appreciation to the creators of the utilized technologies.
