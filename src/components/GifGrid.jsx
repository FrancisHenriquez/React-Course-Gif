import { getGifs } from "./helpers/getGifs"
import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";

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
   <div className = "card-grid"> 
   {
    images.map( ( image ) => (
        <GifItem 
        key={image.id}
        {...image}
        
        
        
        
        />
    ))



   }
  
   </div>
   </>
  )
  
}
