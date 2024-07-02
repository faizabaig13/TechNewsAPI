TechNewsAPI
TechNewsAPI is a Node.js application that scrapes the latest tech news articles from major news outlets including The Guardian, The New York Times, CNN, and BBC. It provides a RESTful API for accessing these articles.

Features
Fetches tech news articles from multiple sources.
Provides a RESTful API to access the latest tech news.
Utilizes Axios for making HTTP requests and Cheerio for parsing HTML.
Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed Node.js and npm.
You have a basic understanding of JavaScript and Node.js.


Installation
Clone the repository:
git clone https://github.com/faizabaig13/TechNewsAPI.git

Navigate to the project directory:
cd TechNewsAPI

Install the dependencies:
npm install


Usage
To start the application, run:
npm run start
The application will start, and you can access the API at http://localhost:8000



API Endpoints
GET /tech-news/
: Fetch tech news articles from a specific source (e.g., guardian, nyt, cnn, bbc).
GET /tech-news: Fetch all tech news articles from the supported sources.
Example Requests
Fetch all tech news articles:
curl http://localhost:8000/tech-news

Fetch tech news articles from The Guardian:
curl http://localhost:8000/tech-news/guardian

Dependencies
Express: Fast, unopinionated, minimalist web framework for Node.js.
Axios: Promise-based HTTP client for the browser and node.js.
Cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License.
