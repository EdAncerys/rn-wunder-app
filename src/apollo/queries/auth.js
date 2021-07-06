import { gql } from '@apollo/client';

export const QUERY_GET_USER = gql`
    query getUser($id:ID!){
        user(id:$id){
            id
            createdAt
            email
            username
            role{
                type
            }
        }
    }
`;