import React from "react";
import { arrayOf, func, string } from "prop-types";
import styles from "styles/modules/Gallery.module.scss";

const Gallery = ({ photos, activePhoto, onSelectPhoto }) => (
  <div className="w-100">
    <img className="img-fluid shadow d-md-none" src={activePhoto} alt="gallery photos" />
    <div
      className={`${styles.desktopImage} shadow d-none d-sm-block`}
      style={{ backgroundImage: `url(${activePhoto})` }}
    />
    <div className={styles.thumbnailContainer}>
      {photos && photos.map((img) => (
        <div
          key={img}
          className={`${styles.thumbnail} ${img === activePhoto ? styles.active : ""}`}
          style={{ backgroundImage: `url(${img})` }}
          onClick={() => onSelectPhoto(img)}
        />
      ))}
    </div>
  </div>
);

Gallery.defaultProps = {
  photos: [],
  activePhoto: "",
};

Gallery.propTypes = {
  photos: arrayOf(string),
  activePhoto: string,
  onSelectPhoto: func.isRequired,
}

export default Gallery;
