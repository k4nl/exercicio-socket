import React, { useEffect, useState } from 'react';
// import Paper from '@mui/material/Paper';
import CardProduct from '../components/CardProduct';

export default function Home() {

  const [ allProducts, setAllProducts ] = useState([]);
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((products) => {
        setLoading(false)
        setAllProducts(products)
    });
  },[])

  return (
    <div>
      { 
        isLoading ? <h2>Carregando</h2> : (
          <div>
            { allProducts.map(({ _id, nome, preco, imagem, }, index) => (
              <CardProduct
                key={_id}
                index={index}
                id={_id}
                nome={nome} 
                imagem={imagem}
                preco={preco}
              />
            ))}
          </div>
        )
      }
    </div>
  )
}
