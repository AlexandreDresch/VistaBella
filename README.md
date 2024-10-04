# Vistabella

Vistabella is a real estate web application designed to streamline property listings, searches, and inquiries. The project is powered by modern technologies like React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Interactive Map**: Integration with Leaflet for property locations.
- **Responsive Design**: Tailwind CSS ensures the app is mobile-friendly.
- **Form Management**: Uses react-hook-form and Zod for validation.

## Tech Stack

- React for UI components.
- TypeScript for type safety.
- React-Router for navigation.
- Vite as the build tool.
- Tailwind CSS for styling.
- Leaflet and React-Leaflet for maps.
- Zod for schema validation.

## Getting Started

### Prerequisites

- Node.js and npm (if running locally).
- Docker installed (if running with Docker).

## Running the Application

You can run this application either with Docker or locally on your machine.

### Option 1: Running with Docker

1. Clone the repository:

```bash
  https://github.com/AlexandreDresch/VistaBella.git
```

2. Navigate to the project directory:

```bash
  cd VistaBella
```

3. Build and start the Docker containers:

```bash
  docker-compose up --build
```

4. Open your browser and navigate to:

```bash
  http://localhost:5173
```

5. To stop the Docker containers:

```bash
  docker-compose down
```

### Option 2: Running Locally (Without Docker)

1. Clone the repository:

```bash
  https://github.com/AlexandreDresch/VistaBella.git
```

2. Navigate to the project directory:

```bash
  cd VistaBella
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm run dev
```

5. Open your browser and navigate to:

```bash
  http://localhost:5173
```

## Scripts

- **dev**: Starts the Vite development server.
- **build**: Builds the project using TypeScript and Vite.
- **lint**: Runs ESLint to check for code quality.
- **preview**: Runs a Vite preview of the built app.
