/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';

type ScrapedHeadings = {
  h1: string[];
  h2: string[];
  h3: string[];
};

type ScrapedData = {
  url: string;
  title: string | null;
  headings: ScrapedHeadings;
  paragraphs: string[];
};

type ApiResponse =
  | {
      success: true;
      data: ScrapedData;
    }
  | {
      success: false;
      error: string;
      code?: string;
    };

const SCRAPER_API_URL =
  process.env.NEXT_PUBLIC_SCRAPER_API_URL || 'http://localhost:5000/api/scrape';

const WebScraperSection: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [result, setResult] = useState<ScrapedData | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setResult(null);

    if (!url.trim()) {
      setError('Please enter a website URL.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(SCRAPER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok || !data.success) {
        const message =
          !data.success && data.error
            ? data.error
            : 'Failed to scrape the website. Please try again.';
        setError(message);
        setLoading(false);
        return;
      }

      setResult(data.data);
      setSuccessMessage('Successfully scraped website content.');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error while scraping:', err);
      setError(
        'Network error while contacting the scraper API. Please make sure the scraper server is running.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-neutral-950 to-black px-4 py-16">
      <div className="w-full max-w-3xl">
        {/* Card container */}
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-3xl shadow-2xl shadow-black/40 backdrop-blur-md p-8 md:p-10">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-white mb-2">
              Web Scraping Playground
            </h1>
            <p className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto">
              Enter any public website URL and quickly extract its page title,
              headings, and paragraph text. This is a simple demo scraper built
              with Express, Cheerio, and a Next.js frontend.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL"
                className="flex-1 rounded-full border border-neutral-700 bg-neutral-900/80 px-4 py-3 text-sm md:text-base text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-700/70 disabled:cursor-not-allowed px-6 py-3 text-sm md:text-base font-medium text-black shadow-lg shadow-emerald-500/30 transition"
              >
                {loading && (
                  <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                  </span>
                )}
                {loading ? 'Scraping...' : 'Scrape Data'}
              </button>
            </div>

            {/* Status messages */}
            {error && (
              <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                {successMessage}
              </div>
            )}
          </form>

          {/* Results */}
          {result && (
            <div className="mt-6">
              <div className="rounded-3xl border border-neutral-800 bg-black/40 p-5 md:p-6 max-h-[420px] overflow-y-auto space-y-4">
                {/* URL + Title */}
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                    URL
                  </p>
                  <p className="text-xs md:text-sm text-neutral-300 break-all">
                    {result.url}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                    Page Title
                  </p>
                  <p className="text-base md:text-lg font-medium text-white">
                    {result.title || 'No title found'}
                  </p>
                </div>

                {/* Headings */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      H1 Headings
                    </p>
                    {result.headings.h1.length ? (
                      <ul className="space-y-1 text-sm text-neutral-200 list-disc list-inside">
                        {result.headings.h1.map((text, index) => (
                          <li key={`h1-${index}`}>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-neutral-500">None found</p>
                    )}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      H2 Headings
                    </p>
                    {result.headings.h2.length ? (
                      <ul className="space-y-1 text-sm text-neutral-200 list-disc list-inside">
                        {result.headings.h2.map((text, index) => (
                          <li key={`h2-${index}`}>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-neutral-500">None found</p>
                    )}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      H3 Headings
                    </p>
                    {result.headings.h3.length ? (
                      <ul className="space-y-1 text-sm text-neutral-200 list-disc list-inside">
                        {result.headings.h3.map((text, index) => (
                          <li key={`h3-${index}`}>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-neutral-500">None found</p>
                    )}
                  </div>
                </div>

                {/* Paragraphs */}
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                    Paragraphs
                  </p>
                  {result.paragraphs.length ? (
                    <ul className="space-y-2 text-sm text-neutral-200 list-disc list-inside">
                      {result.paragraphs.map((text, index) => (
                        <li key={`p-${index}`}>{text}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-neutral-500">No paragraphs found</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Small helper note */}
          <p className="mt-4 text-[11px] text-neutral-500 text-center">
            Note: Some websites may block automated scraping; if that happens,
            you'll see a clear error message above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebScraperSection;


