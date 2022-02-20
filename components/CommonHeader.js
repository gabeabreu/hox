import Head from "next/head";

export default function CommonHead() {
  return (
    <Head>
      <title>hox</title>
      <meta name="description" content="hox hotel booking" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Next PWA demo" />
      <link rel="apple-touch-icon" href="/static/logo-icon-144x144.png" />
      <link
        rel="apple-touch-startup-icon"
        href="/static/logo-icon-144x144.png"
      />
    </Head>
  );
}
