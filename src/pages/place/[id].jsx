import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { func, shape } from "prop-types";
import HOC from "hoc";
import isEmpty from "lodash/isEmpty";
import { GET_PLACE } from "store/constants/places";
import { setPhoto } from "store/actions/places";
import selectors from "store/selectors/places";
import PlaceDetail from "components/commons/PlaceDetail";

const Spinner = dynamic(() => import("components/commons/Spinner"));
const Reviews = dynamic(() => import("components/commons/Reviews"));
const Breadcrumb = dynamic(() => import("components/commons/Breadcrumb"));

function Place({ places, onSetPhoto }) {
  const { activeBusiness, requesting } = places;

  return (
    <>
      <Head>
        <title>{activeBusiness.name || "Place Detail"}</title>
      </Head>
      {requesting || isEmpty(activeBusiness) ? (
        <Spinner styles={{ width: "90px", height: "90px" }} />
      ) : (
        <div className="container place-detail-container">
          <Breadcrumb items={[{ name: "Inicio", href: "/" }, { name: activeBusiness.name || "Place Detail", href: ""}]} />
          <PlaceDetail business={activeBusiness} onSetPhoto={onSetPhoto} />
          <Reviews reviews={places.activeBusiness.reviews} />
        </div>
      )}
    </>
  )
}

Place.defaultProps = {
  places: {},
};

Place.propTypes = {
  places: shape(),
  onSetPhoto: func.isRequired,
};

const mapStateToProps = (state) => ({
  places: selectors(state).places,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSetPhoto: (photo) => dispatch(setPhoto(photo)),
  };
}

/* Executing graphql request on the server */
export default HOC(mapStateToProps, mapDispatchToProps)(Place, {
  type: GET_PLACE,
});
