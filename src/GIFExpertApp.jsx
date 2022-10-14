
import { useState } from "react"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch','Narurto'])
    return(      <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input  */}
        {/* listado de GIf */}
        <ol>
            {categories.map( category => {
                return <li key={category}>{category}</li>
            })}
            
            
        </ol>
        {/* Gif item */}


        )  




        </>
       
    )
}