import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import { wrapper } from "store";
import { initializeApollo } from "lib/apolloClient";
import Layout from "components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.scss";
import "styles/place-detail.scss";

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const apolloClient = initializeApollo(pageProps.initialApolloState);

    return (
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default wrapper.withRedux(CustomApp);
