import { getGifs } from "./helpers/getGifs"
import { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
    const [counter, SetCounter] = useState(10);

    useEffect ( () => {
        getGifs(category);
    }, [])

    return (
   <>
   <h3>{ category } </h3>
   <h5> { counter }</h5>
   <button onClick={ () => SetCounter ( counter + 1)}> +1 </button>
   </>
  )
}
