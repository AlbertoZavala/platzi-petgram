/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@apollo/client';
import qgl from 'graphql-tag';

const GET_FAVORITES = qgl`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const useGetFavorites = () => {
  const { data, error, loading } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' });
  return { data, loading, error };
};