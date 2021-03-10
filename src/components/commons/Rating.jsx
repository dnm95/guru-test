import React from "react";
import RatingStars from "react-star-ratings";
import { number, oneOfType, string } from "prop-types";

const Rating = ({ rating, count }) => (
  <div className="d-flex align-items-center">
    <RatingStars
      rating={rating}
      starDimension="18px"
      starSpacing="0px"
      starRatedColor="#ffc629"
    />
    <span className="center-count">{`${rating.toFixed(1)} basado en ${count} reseñas.`}</span>
  </div>
);

Rating.defaultProps = {
  rating: 5,
  count: 1,
};

Rating.propTypes = {
  rating: oneOfType([string, number]),
  count: oneOfType([string, number])
};

export default Rating;
