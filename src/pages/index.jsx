import React from "react";
import { func, shape } from "prop-types";
import Head from "next/head";
import HOC from "hoc";
import { getPlaces } from "actions/places";
import selectors from "selectors/places";
import SearchPlaces from "components/forms/SearchPlaces";
import Card from "components/commons/PlaceCard";

function Home(props) {
  const { places, onSearchPlaces } = props;
  const onBeforeSearch = (formData) => onSearchPlaces(formData);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="container mt-5 mb-5">
        <h1>Buscar negocios/comercios:</h1>
        <SearchPlaces onSubmit={onBeforeSearch} />
        <div className="row mt-5">
          {places.business && places.business.map((b) => (
            <div key={b.id} className="col-xs-12 col-sm-4 mb-5">
              <Card item={b} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

Home.defaultProps = {
  places: {},
};

Home.propTypes = {
  places: shape(),
  onSearchPlaces: func.isRequired,
};


const mapStateToProps = (state) => ({
  places: selectors(state).places,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSearchPlaces: (data) => dispatch(getPlaces(data.term, data.location)),
  };
}


export default HOC(mapStateToProps, mapDispatchToProps)(Home);
