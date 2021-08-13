import {gql} from '@apollo/client';

export const QUERY_GET_POSTS = gql`
  query getPosts {
    posts(limit: 10, sort: "createdAt:desc") {
      id
      title
      body
      canVolunteer
      people
      people
      picture {
        url
      }
      user {
        id
        username
        firstName
        lastName
        picture {
          id
          url
        }
      }
    }
  }
`;
