import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {GRAPHQL_URI} from '@env';

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const uploadLink = createUploadLink({
  uri: GRAPHQL_URI,
});

export const uploadClient = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
