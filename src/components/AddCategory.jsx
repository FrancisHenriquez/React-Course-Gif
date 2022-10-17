
import { useState } from "react"


export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('Blue Lock')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if ( InputValue.trim().length <= 1 ) return;
      setCategories( categories => [ InputValue, ...categories ]);
      setInputValue( ' ' );
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
