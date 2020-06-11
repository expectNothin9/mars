import Head from "next/head";

import CommonPage from "../../components/CommonPage";
import UH from "../../components/UH";

import styles from "./index.module.css";
import FASIcon from "../../components/FASIcon";

function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.banner}></div>
      <div className={styles.avatar}>
        <figure>
          <figcaption>Author's avatar</figcaption>
          <img src="/images/agln/logo.jpg" alt="Author's avatar" />
        </figure>
      </div>
      <div className={styles["primary-info"]}>
        <h1>Ray Wen</h1>
        <ul className={styles["role-list"]}>
          <li>
            <FASIcon name="palette" />
            Artist
          </li>
          <li>
            <FASIcon name="laptop-code" />
            Frontend Engineer
          </li>
          <li>
            <FASIcon name="hand-scissors" />
            Copy & Paster
          </li>
        </ul>
      </div>
    </section>
  );
}

function JobExperience() {
  return (
    <section id="job-experience" className={styles["job-experience"]}>
      <h2>
        <a href="#job-experience">
          <FASIcon name="link" />
          Job Experience
        </a>
      </h2>
      <p>
        I worked at <em>Verizon Media</em> (<em>Yahoo</em>) as a{" "}
        <em>frontend engineer</em> since 2012. Over <em>7 years experience</em>{" "}
        on developing and maintaining e-commerce web application.
      </p>
      <p>
        Becoming a <em>tech lead</em> from 2019, taking responsibility of
        resource and schedule management.
      </p>
    </section>
  );
}

export default function Author() {
  return (
    <CommonPage>
      <Head>
        <title>Author of AGEDLION - Ray Wen</title>
      </Head>
      <UH />
      <main className={styles.author}>
        <Profile />
        <JobExperience />
      </main>
    </CommonPage>
  );
}
