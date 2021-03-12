import React from "react";
import { func, shape } from "prop-types";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";
import Gallery from "./Gallery";
import Rating from "./Rating";
import Schedules from "./Schedules";

const PlaceDetail = ({ business, onSetPhoto }) => (
  <div className="row mb-4">
    <div className="col-sm-6 d-flex align-items-center">
      <Gallery photos={business.photos} activePhoto={business.photo} onSelectPhoto={onSetPhoto} />
    </div>
    <div className="col-sm-6 service-info">
      <h1>{business.name}</h1>
      <Rating count={business.review_count} rating={business.rating} />
      <p className="address">Dirección: {business.location.formatted_address}</p>
      <p>
        Teléfono:
        {" "}
        {isEmpty(business.phone) ? "no disponible" : (
          <a href={`tel:${business.phone}`}>{business.display_phone}</a>
        )}
      </p>
      <p>Precios: {business.price || "no disponibles"}</p>
      {business.categories.length > 0 && (
        <p>
          Categorías:
          {" "}
          {business.categories.map((cat, index) => `${cat.title}${index === business.categories.length - 1 ? "." : ", "}`)}
        </p>
      )}
      <p>Cerrado permanentemente: {business.is_closed ? "si" : "no"}.</p>
      {business.hours[0] && (
        <>
          <p>Abierto ahora: {business.hours[0] && business.hours[0].is_open_now ? "si" : "no"}.</p>
          <Schedules schedules={business.hours[0].open || []} />
        </>
      )}
      <div className="ctas">
        <a href={business.url} target="_blank" rel="noreferrer">
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
  </div>
);

PlaceDetail.defaultProps = {
  business: {},
};

PlaceDetail.propTypes = {
  business: shape(),
  onSetPhoto: func.isRequired,
};

export default PlaceDetail;
