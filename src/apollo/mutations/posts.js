import {gql} from '@apollo/client';

export const ADD_FILE = gql`
  mutation uploadOneFile($file: Upload!) {
    upload(file: $file) {
      id
      name
      createdAt
    }
  }
`;

export const MUTATION_CREATE_NEW_POST = gql`
  mutation creteNewPost(
    $user: ID!
    $title: String
    $body: String
    $picture: ID
    $people: Boolean
    $planet: Boolean
    $canVolunteer: Boolean
  ) {
    createPost(
      input: {
        data: {
          user: $user
          title: $title
          body: $body
          picture: $picture
          people: $people
          planet: $planet
          canVolunteer: $canVolunteer
        }
      }
    ) {
      post {
        id
      }
    }
  }
`;
