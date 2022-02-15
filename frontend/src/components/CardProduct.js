import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';

import socket from '../utils/socketClient';

export default function CardProduct({ id, nome, preco, imagem, index }) {

  const [ price, setPrice ] = useState(preco);

  useEffect(() => {
    socket.on('refreshCurrentPrice', (product) => {
      if (product._id === id) setPrice(product.preco);
    })
  }, [id]);

  console.log(imagem);

  return (
    <div>
      <p>{ nome }</p>
      <img scr={ imagem } alt={ nome } />
      <p>{ price }</p>
      <button onClick={ () => socket.emit('increasePrice', { id })}>Dar um lance</button>
    </div>
  )
}
