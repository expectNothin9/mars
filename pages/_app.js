import React from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../apollo/client";

import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
};

export default App;
