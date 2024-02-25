import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event)=> {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //Para evitar que submit recarge la pagina al presionar el boton.
    if (inputValue.trim().length > 1) {
      onNewCategory(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder={'Buscar Gifs'}
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
