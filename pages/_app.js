import ApolloClient from "apollo-boost";

import "../styles/global.css";

const client = new ApolloClient({
  uri: "/api/graphql",
});

import { ApolloProvider } from "@apollo/react-hooks";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
