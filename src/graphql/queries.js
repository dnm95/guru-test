import { gql } from "@apollo/client";

export const SEARCH_PLACES = gql`
  query searchPlaces($term: String!, $location: String!) {
    search(term: $term, location: $location, limit: 10) {
      total
      business {
        id
        name
        rating
        review_count
        rating
        display_phone
        photos
        location {
          address1
          city
          state
          country
        }
      }
    }
  }
`;

export const GET_PLACE = gql`
  query getPlace($id: String!) {
    business(id: $id) {
      id
      name
      rating
      review_count
      rating
      phone
      display_phone
      photos
      price
      location {
        address1
        city
        state
        country
      }
      hours {
        hours_type
        is_open_now
      }
      reviews {
        id
        text
      }
    }
  }
`;

export default SEARCH_PLACES;
