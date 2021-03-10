import React, { useEffect } from "react";
import Head from "next/head";
import { func, node } from "prop-types";
import { connect } from "react-redux";
import dayjs from "dayjs";
import * as locale from "dayjs/locale/es";
import { getVisitedPlaces } from "actions/user";
import Header from "components/header";
import Footer from "components/footer";

dayjs.locale(locale);

function Layout(props) {
  const { children, onGetVisitedPlaces } = props;

  useEffect(() => {
    onGetVisitedPlaces()
  }, []);

  return (
    <>
      <Head>
        <title>Guru Hotel</title>
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
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  onGetVisitedPlaces: func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetVisitedPlaces: () => dispatch(getVisitedPlaces()),
  };
}

export default connect(null, mapDispatchToProps)(Layout);