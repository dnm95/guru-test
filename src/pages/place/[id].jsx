import React from "react";
import Head from "next/head";
import Link from "next/link";
import { shape } from "prop-types";
import HOC from "hoc";
import isEmpty from "lodash/isEmpty";
import { GET_PLACE } from "store/constants/places";
import selectors from "store/selectors/places";
import Rating from "components/commons/Rating";
import Reviews from "components/commons/Reviews";
import Spinner from "components/commons/Spinner";
import Schedules from "components/commons/Schedules";

function Place({ places }) {
  const { activeBusiness, requesting } = places;

  return (
    <>
      <Head>
        <title>{activeBusiness.name || "Place Detail"}</title>
      </Head>
      {requesting || isEmpty(activeBusiness) ? (
        <Spinner styles={{ width: "90px", height: "90px" }} />
      ) : (
        <div className="container place-detail-container">
          <div className="row mb-5">
            <div className="col-sm-6 d-flex align-items-center">
              <img className="img-fluid shadow" src={activeBusiness.photos[0]} alt={activeBusiness.name} />
            </div>
            <div className="col-sm-6 service-info">
              <h1>{activeBusiness.name}</h1>
              <Rating count={activeBusiness.review_count} rating={activeBusiness.rating} />
              <p className="address">Dirección: {activeBusiness.location.formatted_address}</p>
              <p>Precios: {places.activeBusiness.price || "no disponibles"}</p>
              <p>
                Teléfono:
                {" "}
                {isEmpty(activeBusiness.phone) ? "no disponible" : (
                  <a href={`tel:${activeBusiness.phone}`}>{activeBusiness.display_phone}</a>
                )}
              </p>
              {activeBusiness.categories.length > 0 && (
                <p>
                  Categorías:
                  {" "}
                  {activeBusiness.categories.map((cat, index) => `${cat.title}${index === activeBusiness.categories.length - 1 ? "." : ", "}`)}
                </p>
              )}
              <p>Cerrado permanentemente: {activeBusiness.is_closed ? "si" : "no"}.</p>
              <p>Abierto ahora: {activeBusiness.hours[0] && activeBusiness.hours[0].is_open_now ? "si" : "no"}.</p>
              <Schedules schedules={activeBusiness.hours[0].open || []} />
              <a href={activeBusiness.url} target="_blank" rel="noreferrer">
                <button className="btn primary" type="button">
                  Visitar sitio web
                </button>
              </a>
              <Link href="/">
                <a>
                  <button className="btn cancel ml-3" type="button">
                    Regresar
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
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
