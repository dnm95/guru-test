import React from "react";
import Head from "next/head";
import { node } from "prop-types";
import Header from "components/header";

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Fitzer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1,maximum-scale=1,user-scalable=no"
          key="viewport"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?amily=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" /> 
      </Head>
      <Header />
      <div className="page-content">
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout;