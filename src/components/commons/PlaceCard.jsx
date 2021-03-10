import React from "react";
import { shape } from "prop-types";
import Link from "next/link";
import Rating from "react-star-ratings";
import { parseAddress } from "helpers";

import styles from "styles/Card.module.scss";

const PlaceCard = ({ item }) => (
  <Link href={`/place/${item.id}`}>
    <a>
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
        </div>
      </div>
    </a>
  </Link>
);

PlaceCard.propTypes = {
  item: shape().isRequired,
};

export default PlaceCard;
