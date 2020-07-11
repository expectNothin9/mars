import Head from "next/head";

export default function CommonPage({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css"
          media="all"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}
