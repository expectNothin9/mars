import Head from "next/head";

import CommonPage from "../../components/common/CommonPage";
import UH from "../../components/common/UH";
import Author from "../../components/author/Author";

const AuthorIndex = () => (
  <CommonPage>
    <Head>
      <title>Author of AGEDLION - Ray Wen</title>
    </Head>
    <UH />
    <Author />
  </CommonPage>
);

export default AuthorIndex;
