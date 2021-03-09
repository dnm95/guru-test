import React from "react";
import App from "next/app";
import { wrapper } from "store";

import "bootstrap/dist/css/bootstrap.min.css";

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(CustomApp);
