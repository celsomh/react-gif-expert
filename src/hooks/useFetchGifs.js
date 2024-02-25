//Custom Hook

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
//Al no ser un FunctionalComponent no es necesario desestructurar los props.
export const  useFetchGifs=(category)=>{

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };

    //El useEffect se ejecuta cuando se rederiza por primera vez el componente. Es decir, a diferencia del useState, que se ejecuta cada vez que el componente es renderizado, el useEffect se ejecuta cuando el componente es renderizado por primera vez.
    //Importante. NO es posible usar async en el useEffect en el primer parametro.
    // useEffect(async() => (), []);. Esto no se puede hacer
    useEffect(() => {
      getImages(category);
    }, []);
    //Ya que los atributos del objeto tienen el mismo nombre se escriben una sola vez, en lugar de {images:images, isLoading:isLoading},
    return { images, isLoading };
}