import React from "react";
import Head from "next/head";
import { arrayOf, shape } from "prop-types";
import { Container } from "reactstrap";
import HOC from "hoc";
import actions from "actions/test";
import selectors from "selectors/test";

function Repo(props) {
  const { query } = props.router;
  return (
    <>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Container fluid className="mt-5 mb-5">
        <h2>Repo: {query.id}</h2>
      </Container>
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
  repos: selectors(state).test.repos,
});

export default HOC(mapStateToProps)(Repo, {
  type: actions.REQUEST_REPOS,
  payload: { username: "dnm95" },
});
