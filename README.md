This project consumes the [Yelp GraphQL API](https://www.yelp.com/developers/graphql/guides/intro) for searching services using a term and location as the query, also there is an specific page for rendering all the info from a business.

## Getting Started

First, install the dependencies:

```npm i```

Second, create a ```.env.local``` file in the root of the project, like this:
```
YELP_API_KEY=
NEXT_PUBLIC_API_URI=http://localhost:3000/api/
```
Here it's the link for the [env template](https://github.com/dnm95/guru-test/blob/master/.env.example).

Third, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to see the application live on vercel visit: [https://guru-test-dnm95.vercel.app/](https://guru-test-dnm95.vercel.app/)
