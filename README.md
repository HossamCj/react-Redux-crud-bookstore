# React-Redux-CRUD-Bookstore with JSON-Server

Welcome to the React-Redux-CRUD-Bookstore application! This app is a simple CRUD (Create, Read, Update, Delete) system for managing a bookstore. It includes simulated login and logout functionality with dynamically enabled or disabled buttons in the form.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Simulated Login and Logout](#simulated-login-and-logout)
- [JSON-Server Setup](#json-server-setup)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- Git installed
- Basic knowledge of React, Redux, and JSON-Server

### Installation

  To set up the project locally, follow these steps:

  1. Clone the repository:
     ```
       git clone https://github.com/yourusername/React-Redux-CRUD-Bookstore.git
     ```

  2. Navigate to the project directory:
    ```
      cd React-Redux-CRUD-Bookstore
    ```

  3. Install the project dependencies:
    ```
      npm install
    ```

## Usage
  To run the React-Redux-CRUD-Bookstore app, use the following command:
  ``` npm start ```
This will start the development server, and you can access the app in your web browser at `http://localhost:3000`.

## Simulated Login and Logout
  In this app, we've implemented simulated login and logout functionality to practice enabling and disabling buttons in the form. By default, the "Login"     button is active, allowing you to interact with the form. After clicking "Login," the "Logout" button becomes active, and you can click it to disable the   form buttons again.

## JSON-Server Setup
  1. Create a `db.json` file in the project root directory.
  2. Define your JSON data structure in `db.json`. For example:

      ```
        {
          "books": [
            {
              "id": 1,
              "title": "Book 1",
              "price": 19.99,
              "description": "Lorem ipsum..."
            },
            {
              "id": 2,
              "title": "Book 2",
              "price": 29.99,
              "description": "Lorem ipsum..."
            }
          ]
        }
      ```
  3. Start JSON-Server using the following command:
    ```npx json-server --watch db.json --port 5000```
    This will start JSON-Server on http://localhost:5000 with your defined data.


