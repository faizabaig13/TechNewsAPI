#Technewsapi
 <h1>TechNewsAPI</h1>
    <p>TechNewsAPI is a Node.js application that scrapes the latest tech news articles from major news outlets including The Guardian, The New York Times, CNN, and BBC. It provides a RESTful API for accessing these articles.</p>
 <h2>Features</h2>
    <ul>
        <li>Fetches tech news articles from multiple sources.</li>
        <li>Provides a RESTful API to access the latest tech news.</li>
        <li>Utilizes Axios for making HTTP requests and Cheerio for parsing HTML.</li>
    </ul>
		 <h2>Prerequisites</h2>
    <ul>
        <li>You have installed <a href="https://nodejs.org/">Node.js</a> and <a href="https://www.npmjs.com/">npm</a>.</li>
        <li>You have a basic understanding of JavaScript and Node.js.</li>
    </ul>
 <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/faizabaig13/TechNewsAPI.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd TechNewsAPI</code></pre>
        </li>
        <li>Install the dependencies:
            <pre><code>npm install</code></pre>
        </li>
    </ol>
		 <h2>Usage</h2>
    <p>To start the application, run:</p>
    <pre><code>npm run start</code></pre>
    <p>The application will start, and you can access the API at <code>http://localhost:8000</code>.</p>
		 <h2>API Endpoints</h2>
    <ul>
        <li><strong>GET /tech-news/:source</strong>: Fetch tech news articles from a specific source (e.g., <code>guardian</code>, <code>nyt</code>, <code>cnn</code>, <code>bbc</code>).</li>
        <li><strong>GET /tech-news</strong>: Fetch all tech news articles from the supported sources.</li>
    </ul>
		<h2>Example Requests</h2>
    <p>Fetch all tech news articles:</p>
    <pre><code>curl http://localhost:8000/tech-news</code></pre>
    <p>Fetch tech news articles from The Guardian:</p>
    <pre><code>curl http://localhost:8000/tech-news/guardian</code></pre>
<h2>Project Structure</h2>
    <ul>
        <li><code>app.js</code>: The main application file containing the server and route definitions.</li>
        <li><code>routes/</code>: Contains the route definitions for the API.</li>
        <li><code>services/</code>: Contains the scraping logic for each news source.</li>
        <li><code>utils/</code>: Contains utility functions for the project.</li>
    </ul>
		<h2>Dependencies</h2>
    <ul>
        <li><a href="https://expressjs.com/">Express</a>: Fast, unopinionated, minimalist web framework for Node.js.</li>
        <li><a href="https://github.com/axios/axios">Axios</a>: Promise-based HTTP client for the browser and node.js.</li>
        <li><a href="https://cheerio.js.org/">Cheerio</a>: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.</li>
    </ul>
		<h2>Contributing</h2>
    <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>
		 <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
