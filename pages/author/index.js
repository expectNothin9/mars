import Head from "next/head";

import CommonPage from "../../components/CommonPage";
import UH from "../../components/UH";

export default function Resume() {
  return (
    <CommonPage>
      <Head>
        <title>Resume - AGEDLION</title>
      </Head>
      <div className="container">
        <UH />
        <main>Resume</main>
      </div>
    </CommonPage>
  );
}
