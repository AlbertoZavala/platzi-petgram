import React, { useState, useEffect } from "react";
import { useGetFavorites} from './../hooks/useGetFavorites';
import { ListOfFavs } from "../components/ListOfFavs";

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()
  const [ favs, setFavs ] = useState([])
  
  useEffect(() => {
    if (data) setFavs(data.favs)    
  }, [data])

  return <ListOfFavs favs={favs} error={error} loading={loading} />
}