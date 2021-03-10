import React, { useState } from "react";
import { func } from "prop-types";

const initialState = {
  term: "",
  location: "",
};

function SearchPlaces(props) {
  const { onSubmit } = props;
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
          placeholder="Comida, restaurantes..."
          value={state.term}
          onChange={onChange}
        />
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            name="location"
            placeholder="Ubicación"
            value={state.location}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-2">
          <button className="btn block" type="submit">Buscar</button>
        </div>
      </div>
    </form>
  )
}

SearchPlaces.propTypes = {
  onSubmit: func.isRequired,
};

export default SearchPlaces;
