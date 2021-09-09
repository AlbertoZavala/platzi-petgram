import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, from  } from '@apollo/client';
import { App } from './App';
import Context from './Context';
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-clgg.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    //window.location.href = '/'
    window.location = '/user'
  }
})

const client = new ApolloClient({
  link: from([
    errorMiddleware,
    authLink.concat(httpLink),
  ]), 
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />,
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
);
