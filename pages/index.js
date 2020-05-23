import Head from "next/head";

import CommonPage from "../components/CommonPage";
import UH from "../components/UH";
import FABIcon from "../components/FABIcon";

import styles from "./index.module.css";

export default function Home() {
  return (
    <CommonPage>
      <Head>
        <title>AGEDLION</title>
      </Head>
      <UH />
      <main className={styles.home}>
        <figure>
          <figcaption>AGEDLION Logo</figcaption>
          <img src="/images/agln/logo.jpg" alt="AGEDLION Logo" />
        </figure>
        <h1>AGEDLION</h1>
        <ul className={styles.social}>
          <li>
            <a href="https://www.facebook.com/agedlion">
              <FABIcon name="facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/agedlion/">
              <FABIcon name="instagram" />
            </a>
          </li>
        </ul>
      </main>
    </CommonPage>
  );
}
