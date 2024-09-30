# Simple Express API

## Overview
This is a small project built with Express.js to practice working with APIs. The purpose of this project is to learn how to handle GET and POST requests, use middleware, and work with route parameters and request bodies.

## Features
- **GET /tshirt**: Returns a JSON response with a sample T-shirt object.
- **POST /tshirt/:id**: Takes an `id` as a route parameter and a `logo` in the request body to return a custom T-shirt response.

## API Endpoints

### GET /tshirt
- **Description**: Returns a T-shirt object with size information.
- **Response**:
  ```json
  {
    "tshirt": "👕",
    "size": "large"
  }
