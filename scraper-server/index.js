// Simple Express-based web scraping API
// Uses axios + cheerio to fetch and parse HTML content from a given URL.

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.SCRAPER_PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['POST', 'OPTIONS'],
  })
);

// Helper to validate URL format
function isValidUrl(url) {
  try {
    // eslint-disable-next-line no-new
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

app.post('/api/scrape', async (req, res) => {
  const { url } = req.body || {};

  if (!url || typeof url !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'URL is required.',
      code: 'MISSING_URL',
    });
  }

  if (!isValidUrl(url)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid URL format.',
      code: 'INVALID_URL',
    });
  }

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      timeout: 15000,
      // Follow redirects by default
      maxRedirects: 5,
      validateStatus: (status) => status >= 200 && status < 400,
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // Extract title
    // NOTE: We first try the <title> tag and then fall back to common meta tags
    // so that pages like Amazon that rely heavily on meta/OG tags still return something.
    let title = $('title').first().text().trim();
    if (!title) {
      title =
        $('meta[property="og:title"]').attr('content') ||
        $('meta[name="title"]').attr('content') ||
        $('meta[name="og:title"]').attr('content') ||
        null;
    }

    // Extract headings
    const headings = {
      h1: [],
      h2: [],
      h3: [],
    };

    $('h1').each((_, el) => {
      const text = $(el).text().trim();
      if (text) headings.h1.push(text);
    });
    $('h2').each((_, el) => {
      const text = $(el).text().trim();
      if (text) headings.h2.push(text);
    });
    $('h3').each((_, el) => {
      const text = $(el).text().trim();
      if (text) headings.h3.push(text);
    });

    // Extract paragraphs
    let paragraphs = [];
    $('p').each((_, el) => {
      const text = $(el).text().trim();
      if (text) paragraphs.push(text);
    });

    // Fallback: many large sites (including Amazon) use <div>/<span> instead of <p>.
    // If no <p> content was found, we collect meaningful text snippets from common containers.
    if (paragraphs.length === 0) {
      const textSet = new Set();

      $('body')
        .find('div, span, li')
        .each((_, el) => {
          const text = $(el).text().replace(/\s+/g, ' ').trim();
          // Heuristics: keep only reasonably long, unique snippets to avoid noise.
          if (text && text.length > 30 && !textSet.has(text)) {
            textSet.add(text);
          }
        });

      // Limit to avoid sending an excessively large payload.
      paragraphs = Array.from(textSet).slice(0, 50);
    }

    return res.json({
      success: true,
      data: {
        url,
        title,
        headings,
        paragraphs,
      },
    });
  } catch (error) {
    // Handle websites that block scraping, timeouts, network errors, etc.
    if (error.response) {
      const status = error.response.status;
      if (status === 403 || status === 401) {
        return res.status(403).json({
          success: false,
          error:
            'The website is blocking automated scraping (received 403/401).',
          code: 'SCRAPING_FORBIDDEN',
          status,
        });
      }

      if (status === 429) {
        return res.status(429).json({
          success: false,
          error:
            'The website rate-limited the request (received 429). Please try again later.',
          code: 'RATE_LIMITED',
          status,
        });
      }

      return res.status(502).json({
        success: false,
        error: `Failed to fetch the page. HTTP status: ${status}.`,
        code: 'UPSTREAM_ERROR',
        status,
      });
    }

    if (error.code === 'ECONNABORTED') {
      return res.status(504).json({
        success: false,
        error: 'Request timed out while trying to fetch the page.',
        code: 'TIMEOUT',
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Unexpected error while scraping the page.',
      code: 'UNKNOWN_ERROR',
    });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Scraper server listening on http://localhost:${PORT}`);
});


