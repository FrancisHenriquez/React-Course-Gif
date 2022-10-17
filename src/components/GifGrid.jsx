import { getGifs } from "./helpers/getGifs"
import { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages =  async () => {
        const newImages = await getGifs ( category );
        setImages( newImages );
    }

   useEffect ( () => {
        getGifs(category)
            .then(newImages => setImages(newImages));

   },[])
    return (
   <>
   <h1>{ category } </h1>
   <ol>
   {
    images.map(({ id, title }) => (
        <li key={id}>{title} </li>
    ))
   }
   </ol>
   </>
  )
  
}
