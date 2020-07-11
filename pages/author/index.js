import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import CommonPage from "../../components/common/CommonPage";
import UH from "../../components/common/UH";

import styles from "./index.module.css";
import FASIcon from "../../components/common/FASIcon";

const Profile = () => (
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

const GET_F2E_SINCE = gql`
  query {
    f2eSince
  }
`;

const JobExperience = () => {
  const { data } = useQuery(GET_F2E_SINCE);
  return (
    <section id="job-experience" className={styles["job-experience"]}>
      <h2 className={styles["anchor-title"]}>
        <a href="#job-experience">
          <FASIcon name="link" />
          Job Experience
        </a>
      </h2>
      <p>
        I worked at <em>Verizon Media</em> (<em>Yahoo</em>) as a{" "}
        <em>frontend engineer</em> since {data?.f2eSince || "----"}. Over{" "}
        <em>7 years experience</em> on developing and maintaining e-commerce web
        application.
      </p>
      <p>
        Becoming a <em>tech lead</em> from 2019, taking responsibility of
        resource and schedule management.
      </p>
    </section>
  );
};

const SkillSets = () => (
  <section id="skill-sets" className={styles["skill-sets"]}>
    <h2 className={styles["anchor-title"]}>
      <a href="#skill-sets">
        <FASIcon name="link" />
        Skill Sets
      </a>
    </h2>
    <ul>
      <li>
        <h3>
          <FASIcon name="star" />
          Solid knowledge and techniques of web development
        </h3>
        <p>
          Familiar to constructing website with <em>HTML5</em> semantic tags and
          awesome style from <em>CSS3</em>.
        </p>
        <p>
          More than 5 years experience on building <em>React</em> application.
          Also skilled at <em>Redux</em> for the state/flow control.
        </p>
        <p>
          Able to serving website via <em>Node.js</em> and experienced to
          integrate with <em>RESTful API</em> or <em>GraphQL</em>.
        </p>
        <p>
          Currently adopt <em>Next.js</em> (React framework) to take advantage
          of its
          <span>
            <FASIcon name="angle-right" />
            great <em>routing system</em>,
          </span>
          <span>
            <FASIcon name="angle-right" />
            server rendering approaches (<em>server-side rendering</em> and{" "}
            <em>static generation</em>),
          </span>
          <span>
            <FASIcon name="angle-right" />
            development environment (zero configuration for <em>Babel</em>{" "}
            transpiling, <em>Webpack</em> bundling).
          </span>
        </p>
        <p>
          Use <em>Github</em> for version control and understand{" "}
          <em>CI/CD workflow</em>.
        </p>
      </li>
    </ul>
  </section>
);

const Author = () => (
  <CommonPage>
    <Head>
      <title>Author of AGEDLION - Ray Wen</title>
    </Head>
    <UH />
    <main className={styles.author}>
      <Profile />
      <JobExperience />
      <SkillSets />
    </main>
  </CommonPage>
);

export default Author;
