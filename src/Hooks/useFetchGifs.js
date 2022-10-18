import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../components/helpers/getGifs";


export const useFetchGifs = ( category ) => {
        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState([]);

    const getImages =  async () => {
        const newImages = await getGifs ( category );
        setImages( newImages );
        setIsLoading ( false );
    }

   useEffect ( () => {
        getImages();

   },[]);


  return {
    images,
    isLoading: false
  }
}
