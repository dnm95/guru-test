import React from "react";
import Head from "next/head";
import { arrayOf, shape } from "prop-types";
import HOC from "hoc";
import actions from "constants/places";
import selectors from "selectors/places";

function Repo(props) {
  const { query } = props.router;
  return (
    <>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className="mt-5 mb-5 container-fluid">
        <h2>Repo: {query.id}</h2>
      </div>
    </>
  )
}

Repo.defaultProps = {
  repos: [],
};

Repo.propTypes = {
  repos: arrayOf(shape()),
};

const mapStateToProps = (state) => ({
  repos: selectors(state).places.repos,
});

export default HOC(mapStateToProps)(Repo, {
  type: actions.REQUEST_REPOS,
  payload: { username: "dnm95" },
});
