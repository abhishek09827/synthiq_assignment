# Social Media Data Aggregation Service

This is a Node.js application built using Express.js for aggregating social media statistics from multiple platforms. The service integrates with mock APIs to provide aggregated and platform-specific data.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/social-media-aggregator.git
    cd social-media-aggregator
    ```

2. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Or using yarn:
    ```bash
    yarn install
    ```

## Configuration

Here are the environment variables you need to set:

- `PORT`: The port number on which the application will run (default: `3000`).
- `TWITTER_API_URL`: URL for the mock Twitter API.
- `INSTAGRAM_API_URL`: URL for the mock Instagram API.
- `API_KEY`: Your API key for authenticating requests.

## Running the Application
To start the application, use the following command:
    ```bash
    npm run dev
    ```
## Access the Application
Once the application is running, you can access the endpoints:

- Aggregated Stats: GET http://localhost:3000/api/social-stats
- Platform Stats: GET http://localhost:3000/api/platform/:platform (replace :platform with twitter or instagram)

## Testing
To run the tests, use the following command:
```bash
    npm test
```
This will execute the Jest test suite to ensure that your application behaves as expected.

## API Documentation
Endpoints :
- GET /api/social-stats: Returns aggregated statistics from multiple social media platforms.
- GET /api/platform/:platform: Returns detailed statistics for a specific platform (twitter or instagram).

## Assumptions and Design Decisions
- Mock APIs: The application integrates with mock APIs to simulate real social media platforms.
- Caching: Responses are cached for 5 minutes to optimize performance and reduce API calls.
- Environment Variables: Configuration settings are managed via environment variables for flexibility and security.

## Deployment
- Deployed on Render.
- URL : [Social Media Data Aggregation Service](https://synthiq-assignment-1.onrender.com)
