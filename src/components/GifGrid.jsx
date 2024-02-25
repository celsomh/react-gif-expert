import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import {  GifItem } from "../components/GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {
  const {images, isLoading}=useFetchGifs(category)
  console.log({images, isLoading});
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Cargando...</p>}
      <div className='card-grid'>
        {images.map((img) => (
          //Es posible 'esparcir' las propiedades de un objeto usando el operador spread. Esto con el propósito de evitar escribir cada una de las propiedades del objeto.
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
