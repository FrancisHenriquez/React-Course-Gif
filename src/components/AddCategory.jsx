
import { useState } from "react"
export const AddCategory = () => {

    const [InputValue, setInputValue] = useState('Blue Lock')
    const onInputChange = ({ target })=> {
        setInputValue(target.value)
    }
  return (
    <form onSubmit={(event) => onSubmit(event)} >
    <input 
    type="text"
    placeholder="Buscar Gifs" 
    value = {InputValue}
    onChange ={ onInputChange  }  
    />
    </form>
  )
}
