import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`

export const useRegisterUser = (email, password) => {
  const [ register, { data, loading, error } ] = useMutation(REGISTER, { variables: { input: { email, password } } });

  return {
    register, data, loading, error,
  };
};