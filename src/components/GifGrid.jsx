
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log ({ images, isLoading });

    return (
         <>
        <h1>{ category } </h1>
    
        {
            isLoading &&( <h2>TA CARGANDO </h2>)
    
        }
         <div className = "card-grid"> 
            {
                 images.map( ( image ) => (
                        <GifItem 
                         key={ image.id }
                         { ...image }        
        />
    ))



   }
  
   </div>
   </>
  )
  
}
