// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { initializeApollo } from "lib/apolloClient";
import { SEARCH_PLACES } from "graphql/queries";

export default async (req, res) => {
  const { query } = req;
  
  if (!query || !query.term || !query.location) {
    return res.status(404).json({
      status: 404,
      message: "Not Found",
    });
  }

  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: SEARCH_PLACES,
    variables: {
      term: query.term,
      location: query.location,
    }});

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "Not Found",
      })
    }
  
  res.statusCode = 200;
  return res.json({ ...data.search });
}
