import React from 'react';
import { useQuery } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';
import { GET_PHOTOS } from '../../hoc/withPhotos';


export const ListOfPhotoCards = ({categoryId}) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId }});

  if (error) {
    return <h2>Internal Server Error</h2>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {
        data.photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))
      }
    </ul>
  );
};
