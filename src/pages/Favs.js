import React, { useState, useEffect } from "react";
import { useGetFavorites} from './../hooks/useGetFavorites';
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout"; 

export default () => {
  const { data, loading, error } = useGetFavorites()
  const [ favs, setFavs ] = useState([])
  
  useEffect(() => {
    if (data) setFavs(data.favs)    
  }, [data])

  return (
    <>
      <Layout title="Tus favoritos" subtitle='Aquí puedes encontrar tus favoritos'>
        <ListOfFavs favs={favs} error={error} loading={loading} />
      </Layout>
  </>
)}