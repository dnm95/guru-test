/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { bool, func, oneOfType, shape } from "prop-types";
import Link from "next/link";
import Rating from "react-star-ratings";
import { parseAddress } from "helpers";

import styles from "styles/Card.module.scss";

const PlaceCard = ({ item, visited, onClick }) => (
  <Link href={`/place/${item.id}`}>
    <a onClick={() => onClick(item.id)}>
      <div className={styles.card}>
        <div className={styles.image} style={{ backgroundImage: `url(${item.photos[0]})` }} />
        <div className={styles.body}>
          <h3>{item.name}</h3>
          <p>{parseAddress(item.location)}</p>
          <p>Reseñas: {item.review_count}</p>
          <div>Calificación:
            <Rating
              rating={item.rating}
              starDimension="18px"
              starSpacing="0px"
              starRatedColor="#ffc629"
            />
          </div>
          <p>Teléfono: {item.display_phone}</p>
          {visited && (
            <p>👁️</p>
          )}
        </div>
      </div>
    </a>
  </Link>
);

PlaceCard.defaultProps = {
  onClick() {},
  visited: false,
};

PlaceCard.propTypes = {
  item: shape().isRequired,
  visited: oneOfType([bool, shape()]),
  onClick: func,
};

export default PlaceCard;
