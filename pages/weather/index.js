import Head from "next/head";

import CommonPage from "../../components/common/CommonPage";
import UH from "../../components/common/UH";
import Weather from "../../components/weather/Weather";

const WeatherIndex = () => (
  <CommonPage>
    <Head>
      <title>Weather - AGEDLION</title>
    </Head>
    <UH />
    <Weather />
  </CommonPage>
);

export default WeatherIndex;
