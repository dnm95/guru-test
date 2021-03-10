import React from "react";
import { arrayOf, shape } from "prop-types";
import RatingStars from "react-star-ratings";
import styles from "styles/Reviews.module.scss";

const Reviews = ({ reviews }) => (
  <div className={styles.reviewsContainer}>
    {reviews && reviews.map((review) => (
      <div className={styles.reviewContainer} key={review.id}>
        <div className={styles.userContainer}>
          <span>{review.user.name}</span>
          <RatingStars
            rating={review.rating}
            starDimension="18px"
            starSpacing="0px"
            starRatedColor="#ffc629"
          />
        </div>
        <p>{review.text}</p>
      </div>
    ))}
  </div>
);

Reviews.defaultProps = {
  reviews: [],
};

Reviews.propTypes = {
  reviews: arrayOf(shape()),
};

export default Reviews;
