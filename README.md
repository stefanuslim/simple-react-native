# React-Native-Simple-App

A simple expo react-native app for user registration and login

# Installation

Clone or download the repository and install the dependencies. Open the project in the Expo app on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

```
  # Clone the repository
  git clone repoGitURL

  # Go to the project location
  cd client/test-app & cd server

  # Install dependencies
  npm install

  # Config database and environment variables
  modify config database and add secret to env

  # Fetch API Client
  modify fetch API url for local IP

  # Start the project
  server (node app.js) & client/test-app (expo start)
```

The server has:
- RESTful endpoint for asset's CRUD Operation
- JSON Formatted response

## RESTful Endpoints

### POST /register
  * Request header
    ```
    no needed
    ```
  * Request Body
    ```
    {
      "email": "<email_for_register>"
      "password": "<password_for_register>"
    }
    ```
  * Response(201)
    ```
    {
      "id" : "<id_generated_by_system>"
      "email" : "<registered_email>"
      "password": "<registered_hashed_password>"
      "createdAt": "2020-03-20T07:15:12.149Z"
      "updatedAt": "2020-03-20T07:15:12.149Z"
    }
    ```
  * Response (400)
    ```
    {
      "message" : "ValidationError"
    }
    ```

### POST /login
  * Request header
    ```
    no needed
    ```
  * Request Body
    ```
    {
      "email": "<email_for_login>"
      "password": "<password_for_login>"
    }
    ```
  * Response(200)
    ```
    {
      "accessToken": "<access_token_JWT>"
    }
    ```
  * Response(400)
    ```
    {
      "message" : "ValidationError"
    }
    ```

### GET /
  * Request header
    ```
    token : "<accessToken_by_AsyncStorage>"
    ```
  * Request Body
    ```
    no needed
    ```
  * Response (200)
    ```
    {
      "message": "Welcome To The App"
    }
    ```
