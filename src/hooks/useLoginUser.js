import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
      login(input: $input)
    }
`

export const useLoginUser = (email, password) => {
  console.log("2 " + email)
  console.log("3 " + password)
  const [ login, { data, loading, error } ] = useMutation(LOGIN, { variables: { input: { email, password } } });
  console.log("4 " + login)
  console.log("5 " + data)
  console.log("6 " + loading)
  console.log("7 " + error)

  return {
    login, data, loading, error,
  };
};
