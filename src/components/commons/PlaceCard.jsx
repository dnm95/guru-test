/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { bool, func, oneOfType, shape } from "prop-types";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";
import styles from "styles/modules/Card.module.scss";
import Rating from "./Rating";

const PlaceCard = ({ item, visited, onClick }) => (
  <Link href={`/place/${item.id}`}>
    <a className="h-100" onClick={() => onClick(item.id)}>
      <div className={`${styles.card} ${visited && styles.visited}`}>
        <div className={styles.image} style={{ backgroundImage: `url(${item.photos[0]})` }} />
        <div className={styles.body}>
          <h3>{item.name}</h3>
          <Rating count={item.review_count} rating={item.rating} />
          <p className={styles.address}>{item.location.formatted_address}.</p>
          <p>Teléfono: {isEmpty(item.display_phone) ? "no disponible." : item.display_phone}</p>
          {visited && (
            <p className="mb-0 font-weight-bold">👁️ Visto antes</p>
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
