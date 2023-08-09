# Fastify Fibonacci API

This is the README documentation for the Fastify Fibonacci API project, which is built to calculate the Fibonacci sequence and its sum.

## Project Description

The Fastify Fibonacci API is designed to calculate the Fibonacci sequence of a positive integer `n` and return the result consisting of the Fibonacci sequence and its sum.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [API Endpoint](#api-endpoint)
- [Example Usage](#example-usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/sctnightcore/test-internship-dudee-indeed-backend.git
```

2. Navigate to the project directory:

```bash
cd test-internship-dudee-indeed-backend
```

3. Install dependencies using npm:

```bash
npm install
```

# Usage

This project uses Fastify as the server and requires Node.js to run the code.

## Commands

- Start the server in development mode:

```bash
npm run dev
```

- Build and bundle the project:

```bash
npm run build
```

- Start the server in production mode:

```bash
npm run start
```

# API Endpoint

Once the server is running, you can access the API by sending a GET request to the following endpoint:

```bash
GET http://localhost:3000/api/v1/test/:n
```

Replace :n with a positive integer to calculate the Fibonacci sequence.

# Example Usage

Call the API to calculate the Fibonacci sequence of the number 8:

```bash
GET http://localhost:3000/api/v1/test/8
```

Response:

```json
{
  "member-count": 8,
  "sequence": [0, 1, 1, 2, 3, 5, 8, 13],
  "total": 33
}
```
