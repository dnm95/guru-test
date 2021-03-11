import React, { useState } from "react";
import { bool, func } from "prop-types";
import isEmpty from "lodash/isEmpty";

const initialState = {
  term: "",
  location: "",
};

function SearchPlaces(props) {
  const { requesting, onSubmit } = props;
  const [state, setState] = useState(initialState);

  const onChange = (e) => setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  const onBeforeSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  }

  return (
    <form onSubmit={onBeforeSubmit}>
      <div className="row">
        <div className="col-sm-5">
          <input
          type="text"
          name="term"
          placeholder="Comida, restaurantes, plomero, dr,..."
          className="responsive-input"
          value={state.term}
          onChange={onChange}
        />
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            name="location"
            placeholder="Ubicación, CDMX, Cancún, NY..."
            className="responsive-input"
            value={state.location}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-2">
          <button
            className="btn primary block for-input"
            type="submit"
            disabled={requesting || isEmpty(state.term) || isEmpty(state.location)}
          >
            Buscar
          </button>
        </div>
        <div className="col-sm-12">
          <p className="text-muted small mt-2">
            Powered by
            {" "}
            <a className="text-muted" href="https://www.yelp.com/developers/graphql/query/search" target="_blank" rel="noreferrer">
              Yelp API
            </a>
          </p>
        </div>
      </div>
    </form>
  )
}

SearchPlaces.defaultProps = {
  requesting: false,
}

SearchPlaces.propTypes = {
  onSubmit: func.isRequired,
  requesting: bool,
};

export default SearchPlaces;
