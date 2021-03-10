import React from "react";
import { shape } from "prop-types";

const Spinner = ({ styles }) => (
  <div className="text-center mt-5 container">
    <div className="spinner-border text-primary" role="status" style={styles}>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

Spinner.defaultProps = {
  styles: {},
};

Spinner.propTypes = {
  styles: shape(),
};

export default Spinner;
