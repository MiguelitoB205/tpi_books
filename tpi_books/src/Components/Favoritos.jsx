import React from 'react'

const Favoritos = ({libros, setLibros, object}) => {
const {nombre, imagen} = object

  return (
    <div>
      <h1>Tus libros favoritos</h1>
      <h2>{nombre}</h2>
      <img src={imagen} width="160px" height='180px' />
    </div>
  )
}

export default Favoritos
