import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import CommonPage from "../components/CommonPage";
import UH from "../components/UH";
import FABIcon from "../components/FABIcon";

import styles from "./index.module.css";

const GET_SAY_HELLO = gql`
  query {
    sayHello
  }
`;

const GqlHello = () => {
  const { data } = useQuery(GET_SAY_HELLO);
  return <div>GqlHello {data?.sayHello}</div>;
};

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
        <GqlHello />
      </main>
    </CommonPage>
  );
}
