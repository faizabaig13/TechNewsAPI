const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 8000;

const getGuardianNews = async () => {
    try {
        const response = await axios.get('https://www.theguardian.com/technology/all');
        const html = response.data;
        const $ = cheerio.load(html);

        const articles = [];
        $('a[aria-label*="tech"]', html).each(function () {
            const title = $(this).attr('aria-label');
            let url = $(this).attr('href');
            if (title && url) {
                if (!url.startsWith('https://www.theguardian.com/')) {
                    url = `https://www.theguardian.com/${url}`;
                }
                articles.push({
                    title,
                    url,
                    source: 'guardian',
                });
            }
        });
        return articles;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getNYTNews = async () => {
    try {
        const response = await axios.get('https://www.nytimes.com/section/technology');
        const html = response.data;
        const $ = cheerio.load(html);

        const articles = [];
        $('a[class*="css-8hzhxf"]', html).each(function () {
            const title = $(this).text();
            let url = $(this).attr('href');
            if (url && !url.startsWith('https://www.nytimes.com')) {
                url = `https://www.nytimes.com${url}`;
            }
            articles.push({
                title,
                url,
                source: 'nyt',
            });
        });

        return articles;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getCNNNews = async () => {
    try {
        const response = await axios.get('https://edition.cnn.com/business/tech');
        const html = response.data;
        const $ = cheerio.load(html);

        const articles = [];
        $('a.container__link.container__link--type-article', html).each(function () {
            const span = $(this).find('span.container__headline-text');
            const title = span.text().trim();
            if (title) {
                let url = $(this).attr('href');
                if (url && !url.startsWith('https://edition.cnn.com')) {
                    url = `https://edition.cnn.com${url}`;
                }
                articles.push({
                    title,
                    url,
                    source: 'cnn',
                });
            }
        });

        return articles;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getBBCNews = async () => {
    try {
        const response = await axios.get('https://www.bbc.com/innovation');
        const html = response.data;
        const $ = cheerio.load(html);

        const articles = [];
        $('div[data-testid="liverpool-card"]', html).each(function () {
            const titleElement = $(this).find('h2[data-testid="card-headline"]');
            const linkElement = $(this).find('a.sc-2e6baa30-0');
            
            const title = titleElement.text().trim();
            let url = linkElement.attr('href');
            if (url && !url.startsWith('https://www.bbc.com')) {
                url = `https://www.bbc.com${url}`;
            }
            if (title && url) {
                articles.push({
                    title,
                    url,
                    source: 'bbc',
                });
            }
        });

        return articles;
    } catch (error) {
        console.error('Error fetching BBC news:', error);
        return [];
    }
};

const newsSources = {
    guardian: getGuardianNews,
    nyt: getNYTNews,
    cnn: getCNNNews,
    bbc: getBBCNews,
};

// Dynamic route for specific news sources
app.get('/tech-news/:source', async (req, res) => {
    const source = req.params.source.toLowerCase();
    if (newsSources[source]) {
        const news = await newsSources[source]();
        res.json(news);
    } else {
        res.status(404).send('News source not found');
    }
});

// Combined route for all news sources
app.get('/tech-news', async (req, res) => {
    const allNews = [];
    for (const source in newsSources) {
        const news = await newsSources[source]();
        allNews.push(...news);
    }
    res.json(allNews);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Tech News API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
