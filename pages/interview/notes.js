import React from "react";
import Head from "next/head";

import CommonPage from "../../components/common/CommonPage";
import InterviewNotes from "../../components/interview/InterviewNotes";

const InterviewNotesIndex = () => (
  <CommonPage>
    <Head>
      <title>Interview Notes</title>
    </Head>
    <InterviewNotes />
  </CommonPage>
);

export default InterviewNotesIndex;
