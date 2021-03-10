import React from "react";
import { arrayOf, func, shape } from "prop-types";
import HOC from "hoc";
import { getPlaces } from "actions/places";
import { setVisitedPlace } from "actions/user"
import selectors from "selectors/places";
import userSelectors from "selectors/user";
import SearchPlaces from "components/forms/SearchPlaces";
import Card from "components/commons/PlaceCard";

function Home(props) {
  const { places, visitedPlaces, onSearchPlaces, onSetVisitedPlace } = props;
  const onBeforeSearch = (formData) => onSearchPlaces(formData);

  return (
    <div className="container mt-5 mb-5">
      <h1>Buscar negocios/comercios:</h1>
      <SearchPlaces onSubmit={onBeforeSearch} />
      <div className="row mt-5">
        {places.business && places.business.map((b) => (
          <div key={b.id} className="col-xs-12 col-sm-4 mb-5">
            <Card item={b} onClick={onSetVisitedPlace} visited={visitedPlaces.find((visit) => visit === b.id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

Home.defaultProps = {
  places: {},
  visitedPlaces: [],
};

Home.propTypes = {
  places: shape(),
  visitedPlaces: arrayOf(shape()),
  onSearchPlaces: func.isRequired,
  onSetVisitedPlace: func.isRequired,
};


const mapStateToProps = (state) => ({
  places: selectors(state).places,
  visitedPlaces: userSelectors(state).user.visitedPlaces,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSearchPlaces: (data) => dispatch(getPlaces(data.term, data.location)),
    onSetVisitedPlace: (place) => dispatch(setVisitedPlace(place)),
  };
}


export default HOC(mapStateToProps, mapDispatchToProps)(Home);
