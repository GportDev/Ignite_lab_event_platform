import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4os4lyu0wg201z42csu737g/master',
  cache: new InMemoryCache()
})