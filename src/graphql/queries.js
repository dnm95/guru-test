import { gql } from "@apollo/client";


export const SEARCH_PLACES = gql`
  query searchPlaces($term: String!, $location: String!) {
    search(term: $term, location: $location, limit: 10) {
      total
      business {
        name
        rating
        review_count
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

export default SEARCH_PLACES;
