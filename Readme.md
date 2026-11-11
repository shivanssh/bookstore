
# Online Bookstore API

A RESTful API built with Node.js, Express and TypeScript for managing
an online bookstore.

## Features

- Get all books.
- Get an individual book by ID.
- Create new book entry.
- Request validation using Zod.
- Duplicate ISBN validation.
- Centralized error/non-found handling.
- Interactive API documentation using Swagger UI.

## Tech Stack

- Node.js - Base
- Express - Framework
- TypeScript - Language
- Zod - Validation framework
- Swagger - API documentation
- Jest - Testing
- ESLint - Code std
- Prettier - Code beautification

## Prerequisites

- Node.js (LTS recommended)
- npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm ci or npm install
```

## Environment Configuration

Create a `.env` file in the project root:

```env
NODE_ENV=development
PORT=3000
```

## Run Locally

Development:

```bash
npm run dev
```

## API Endpoints

Health Endpoint to check the service:

`http://localhost:3000/health`

Base URL: `http://localhost:3000/v1/api`

- GET    /books - To get all books
- GET    /books/:id - To get a book by Id
- POST   /books - To create a book entry

## API Documentation

Interactive Swagger documentation:

http://localhost:3000/docs

OpenAPI specification:

`docs/openapi.yaml`

## Running Tests

Run Books module tests(Have added few only):

```bash
npm run test:books
```

Run tests with coverage:

```bash
npm run test:coverage
```

## Data Storage

The application uses an in-memory Map to simulate database storage.

Sample books are initialized when the application starts.

**Note:** Data is not persistent.

## Project Architecture

The Books module follows a modular architecture with separation of concerns:

- Helper: Book types, errors and seed data.
- Repositories: Data access and in-memory implementation.
- Services: Business logic.
- Controllers: HTTP request and response handling.
- Routes: API endpoint definitions.
- Schemas: Request validation.

Flow:

- Routes -> Middleware(validation/404/error) -> Controller -> Service -> Repository -> DB(in-memory)


## Note
- Ignore vulnerabilities, they are coming from dev dependencies from packages directly and it is will never reach prod env. 
- For confirmation run `npm audit --omit=dev` for validation.