import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
      login(input: $input)
    }
`

export const useLoginUser = (email, password) => {  
  const [ login, { data, loading, error } ] = useMutation(LOGIN, { variables: { input: { email, password } } }); 

  return {
    login, data, loading, error,
  };
};
