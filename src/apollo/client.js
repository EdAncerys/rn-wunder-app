import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {GRAPHQL_URI} from '@env';
console.log(GRAPHQL_URI);

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
