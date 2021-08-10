import {gql} from '@apollo/client';

export const QUERY_GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      body
    }
  }
`;
