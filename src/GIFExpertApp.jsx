
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch','Narurto'])
    const onAddCategory1 = ()=>{
        // setCategories(cat =>[...cat,'Isagi'])
    }
    return(      <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        <AddCategory setCategories = {setCategories}/>
        <input type="text" />

        {/* input  */}
        {/* listado de GIf */}
        {/* <button onClick={onAddCategory1}>Agregar</button> */}
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