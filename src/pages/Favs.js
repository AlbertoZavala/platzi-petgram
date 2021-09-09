import React, { useState, useEffect } from "react";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { useGetFavorites} from './../hooks/useGetFavorites'

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()
  const [ favs, setFavs ] = useState([])

  useEffect(() => {
    if (data) setFavs(data.favs)
    console.log(data)
    console.log(favs)
  }, [data])

  return <ListOfPhotoCards list={favs} error={error} loading={loading} />
}