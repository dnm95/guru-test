import React from "react";
import dynamic from "next/dynamic";
import { arrayOf, func, shape } from "prop-types";
import HOC from "hoc";
import { getPlaces } from "store/actions/places";
import { setVisitedPlace } from "store/actions/user"
import selectors from "store/selectors/places";
import userSelectors from "store/selectors/user";
import SearchPlaces from "components/forms/SearchPlaces";
import { isEmpty } from "lodash";

const Spinner = dynamic(() => import("components/commons/Spinner"));
const Card = dynamic(() => import("components/commons/PlaceCard"));

function Home(props) {
  const { places, visitedPlaces, onSearchPlaces, onSetVisitedPlace } = props;
  const onBeforeSearch = (formData) => onSearchPlaces(formData);

  return (
    <div className="container mt-5 mb-5">
      <h1>Encuentra los mejores comercios / restaurantes / servicios:</h1>
      <SearchPlaces onSubmit={onBeforeSearch} requesting={places.requesting} />
      {!isEmpty(places.error) && (
        <div className="alert alert-danger" role="alert">
          {places.error}
        </div>
      )}
      {!places.business.length && !places.requesting && (
        <img
          src="https://cdn.pixabay.com/photo/2019/03/25/20/44/lubeck-4081316_1280.jpg"
          className="img-fluid shadow"
          alt="placeholder"
        />
      )}
      {places.requesting ? (
        <Spinner styles={{ width: "80px", height: "80px" }} />
      ) : (
        <div className="row mt-4">
          {places.business && places.business.map((b) => (
            <div key={b.id} className="col-xs-12 col-sm-4 mb-5">
              <Card
                item={b}
                onClick={onSetVisitedPlace}
                visited={visitedPlaces.find((visit) => visit === b.id)}
              />
            </div>
          ))}
        </div>
      )}
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
