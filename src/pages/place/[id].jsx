import React from "react";
import Head from "next/head";
import { shape } from "prop-types";
import HOC from "hoc";
import isEmpty from "lodash/isEmpty";
import { GET_PLACE } from "constants/places";
import selectors from "selectors/places";
import { parseAddress } from "helpers";
import Rating from "components/commons/Rating";
import Reviews from "components/commons/Reviews";
import Spinner from "components/commons/Spinner";

function Place(props) {
  const { places } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      {places.requesting ? (
        <Spinner styles={{ width: "90px", height: "90px" }} />
      ) : (
        <div className="mt-5 mb-5 container">
          <div className="row mb-5">
            <div className="col-sm-6">
              <img className="img-fluid" src={places.activeBusiness.photos[0]} alt={places.activeBusiness.name} />
            </div>
            <div className="col-sm-6">
              <h1 className="mb-1">{places.activeBusiness.name}</h1>
              <Rating count={places.activeBusiness.review_count} rating={places.activeBusiness.rating} />
              <p>{parseAddress(places.activeBusiness.location)}</p>
              <p>Precios: {places.activeBusiness.price || "no disponibles"}</p>
              <p>
                Teléfono:
                {" "}
                {isEmpty(places.activeBusiness.phone) ? "no disponible" : (
                  <a href={`tel:${places.activeBusiness.phone}`}>{places.activeBusiness.display_phone}</a>
                )}
              </p>
              <p>Cerrado permanentemente: {places.activeBusiness.is_closed ? "si" : "no"}</p>
              <a href={places.activeBusiness.url} target="_blank" rel="noreferrer">
                <button className="btn secondary block" type="button">
                  Visitar sitio web
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              {places.activeBusiness.reviews.length > 0 && (
                <h2 className="mb-2">Reseñas</h2>
              )}
              <Reviews reviews={places.activeBusiness.reviews} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Place.defaultProps = {
  places: {},
};

Place.propTypes = {
  places: shape(),
};

const mapStateToProps = (state) => ({
  places: selectors(state).places,
});

export default HOC(mapStateToProps)(Place, {
  type: GET_PLACE,
});
