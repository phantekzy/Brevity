# Brevity API

Brevity is a professional-grade URL shortening service built with Node.js, Express, TypeScript, and Drizzle ORM. It uses PostgreSQL as the primary data store to provide persistent, redirected links with basic click analytics.

## Project Architecture

The project follows a modular controller-based architecture:
- src/db: Database schema definitions and connection pooling using the pg driver.
- src/controllers: Core business logic, including slug generation and redirection handling.
- src/routes: API endpoint definitions.
- src/index.ts: Application entry point and middleware configuration.



## Features

- URL Shortening: Converts long URLs into unique 6-character slugs using nanoid.
- Instant Redirection: Handles HTTP 302 redirects from short slugs to original destination URLs.
- Click Tracking: Automatically increments a click counter in the database for every successful redirect using atomic SQL updates.
- Type Safety: Full TypeScript integration with Drizzle ORM for end-to-end type safety.

## Prerequisites

- Node.js (LTS version recommended)
- PostgreSQL (Installed and running via systemctl)
- npm (Node Package Manager)

## Installation

1. Clone the repository and navigate to the project folder.
2. Initialize the project:
   npm init -y
3. Install production dependencies:
   npm install express pg drizzle-orm dotenv nanoid
4. Install development dependencies:
   npm install -D typescript @types/node @types/express @types/pg drizzle-kit tsx

## Database Setup

1. Ensure PostgreSQL is running on your system:
   sudo systemctl start postgresql

2. Access the PostgreSQL CLI to create the database and set the password:
   psql postgres
   CREATE DATABASE shorty_db;
   ALTER USER postgres WITH PASSWORD 'xxx';
   \q

3. Configure your environment variables in a .env file:
   DATABASE_URL=postgres://postgres:xxx@localhost:5432/shorty_db
   PORT=6969

4. Sync the schema to the database:
   npx drizzle-kit push

## Running the Project

To start the server in development mode with hot-reloading:
npm run dev

The API will be available at http://localhost:6969.



## API Endpoints

### 1. Create a Short Link
- URL: /shrink
- Method: POST
- Body: { "url": "https://example.com" }
- Success Response: 201 Created with the generated shortUrl.

### 2. Redirect
- URL: /:slug
- Method: GET
- Action: Redirects the user to the original URL and increments the click count.

## Technologies Used

- Runtime: Node.js
- Language: TypeScript
- Framework: Express.js
- ORM: Drizzle ORM
- Driver: node-postgres (pg)
- Database: PostgreSQL
- ID Generation: nanoid
