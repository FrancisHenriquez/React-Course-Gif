
import { useState } from "react"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch','Narurto'])
    const onAddCategory = ()=>{
        setCategories(cat =>[...cat,'Isagi'])
    }
    return(      <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input  */}
        {/* listado de GIf */}
        <button onClick={onAddCategory}>Agregar</button>
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