import {gql} from '@apollo/client';

export const QUERY_GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      createdAt
      firstName
      lastName
      email
      username
      role {
        type
      }
    }
  }
`;

export const QUERY_GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      email
    }
  }
`;
