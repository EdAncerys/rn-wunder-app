import { gql } from '@apollo/client';

export const MUTATION_LOG_IN = gql`
    mutation login($identifier: String!, $password: String!){
        login(input:{identifier: $identifier,password: $password}){
                jwt
                user{
                    id
                    username
                    email
                    role{
                        name
                        type
                    }
                }
            }
        }
`;

export const MUTATION_SIGN_UP = gql`
    mutation register($username: String!, $email: String!, $password: String!, ){
        register(input:{
            username: $username, 
            email: $email, 
            password: $password,
            }){
                jwt
                user{
                    id
                }
        }
    }
`;

export const MUTATION_UPDATE_USER = gql`
    mutation updateUser($id: ID! $username: String $email: String $password:String){
        updateUser(input: {
            where: { id: $id }
            data:{
                username: $username,
                email: $email,
                password: $password,
            }
        }){
            user{
                id
                    createdAt
                    updatedAt
                username
                email
                role{
                    type
                }
            }
        }
    }
`;