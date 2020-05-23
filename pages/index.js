import Head from "next/head";

import CommonPage from "../components/CommonPage";
import UH from "../components/UH";

export default function Home() {
  return (
    <CommonPage>
      <Head>
        <title>AGEDLION</title>
      </Head>
      <div className="container">
        <UH />
        <main>Home</main>
      </div>
    </CommonPage>
  );
}
