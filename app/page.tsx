import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'Welcome to the most SEO-optimized Next.js 16 hello world page.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hello World | Next.js 16 SEO Starter',
    description: 'Welcome to the most SEO-optimized Next.js 16 hello world page.',
    url: 'https://yourdomain.com',
    type: 'website',
  },
  twitter: {
    title: 'Hello World | Next.js 16 SEO Starter',
    description: 'Welcome to the most SEO-optimized Next.js 16 hello world page.',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hello World',
    description: 'Welcome to the most SEO-optimized Next.js 16 hello world page.',
    url: 'https://yourdomain.com',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Next.js 16 SEO Starter',
      url: 'https://yourdomain.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://yourdomain.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
    datePublished: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://yourdomain.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container">
        <article>
          <header>
            <h1>Hello World</h1>
            <p className="subtitle">
              Welcome to Next.js 16 with TypeScript
            </p>
          </header>
          <section>
            <h2>Built for Performance & SEO Excellence</h2>
            <p>
              This starter template includes:
            </p>
            <ul>
              <li>Next.js 16 App Router with React Server Components</li>
              <li>TypeScript for type safety</li>
              <li>Comprehensive Metadata API (OpenGraph, Twitter Cards, verification)</li>
              <li>JSON-LD structured data with SearchAction schema</li>
              <li>Dynamic sitemap.xml generation</li>
              <li>Robots.txt configuration</li>
              <li>Semantic HTML5 elements</li>
              <li>Mobile-first responsive design</li>
              <li>Performance optimized (compression, no X-Powered-By header)</li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}

