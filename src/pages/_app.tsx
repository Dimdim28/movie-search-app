import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Search Movies App</title>
        <meta name="description" content="Search movies application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="search movies, movies app, search app, search, movies, app, search movies app"
        />
        <meta property="og:title" content="Search movies application" />
        <meta
          property="og:description"
          content="It helps you to find movie for this evening =)"
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/premium-vector/video-search-icon-web_116137-5950.jpg?w=2000"
        />
        <meta property="og:site_name" content="search movies" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Dima" />
        <meta property="twitter:title" content="Search movies application" />
        <meta
          property="twitter:description"
          content="It helps you to find movie for this evening =)"
        />
        <meta
          property="twitter:image"
          content="https://img.freepik.com/premium-vector/video-search-icon-web_116137-5950.jpg?w=2000"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
