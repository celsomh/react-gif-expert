import { useState } from 'react';
//Si el archivo de barril es nombrado como index.js entonces unicamente se coloca el nombre de la carpeta en donde este se encuentra.
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (category) => {
    //Para actualizar el estado en este caso no se utiliza push, ya que push realiza una mutacion del objeto, y no es la manera en que trabaja react.
    // categories.push('Nuevo Elemento')

    if (!categories.includes(category)) {
      //Para actualizar el estado se le debe de pasa un valor nuevo, en este caso un arreglo nuevo
      setCategories([...categories, category]);
    }
  };

  return (  
    <>
      <h1>Gif App</h1>
      {/* <AddCategory onAddCategory={onAddCategory}/> */}
      <AddCategory onNewCategory={value=>onAddCategory(value)} />
        {/* Si bien es posible usar el index, el cual esta disponible dentro de la funcion map((value, index)=>{}), como key de un elemento para corregir el error de duplicados, NO se recomienda hacerlo, puesto que react utiliza la propiedad key para saber cuando un objeto fue eliminado.
        categories.map((category) => 
        <li key={category}>{category}</li>;
        */}
        {categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))}
    </>
  );
};
