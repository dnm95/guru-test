// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { initializeApollo } from "lib/apolloClient";
import { GET_PLACE } from "graphql/queries";

export default async (req, res) => {
  const { id } = req.query
  
  if (!id) {
    return res.status(404).json({
      status: 404,
      message: "Not Found",
    })
  }

  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: GET_PLACE,
    variables: {
      id
    }});

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "Not Found",
      })
    }
  
  res.statusCode = 200
  return res.json({ ...data.business })
}
