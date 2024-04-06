import {Link} from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

 const ProductoList = ({ favoritos, setFavoritos, objeto}) =>{

    const  {id, nombre, imagen, titulo, autor, categoria, precio, resena} = objeto
     
  

    const handleToggleFavorito = (objeto) => {
      // Verificar si el objeto ya está en favoritos
      const index = favoritos.findIndex(fav => fav.id === objeto.id);
      if (index === -1) {
        // Si el objeto no está en favoritos, agregarlo
        const nuevosFavoritos = [...favoritos, objeto];
        setFavoritos(nuevosFavoritos);
      } else {
        // Si el objeto ya está en favoritos, eliminarlo
        const nuevosFavoritos = favoritos.filter(fav => fav.id !== objeto.id);
        setFavoritos(nuevosFavoritos);
      }
  
      // Actualizar localStorage
      localStorage.setItem('favoritos',favoritos);
    };
    
  

    return(
<div>
     <div className="container-items" >
        <div style={{backgroundColor: 'skyblue', borderRadius: '10px', margin: '35px'}}>
            <Link to={'/productoDetalle/' + id}>
        <h1 style={{padding: '29px', color: 'black'}}>{nombre}</h1>
            <img src={imagen} width='150px' height='150px' style={{margin: '47px'}}/>
           
            <h2 style={{ padding:'30px', color: 'black'}}><strong>{precio}</strong></h2>
            
            
            </Link>
            <button style={{ margin: '35px', alignContent: 'center'}} onClick={() => handleToggleFavorito(objeto)}>
        <FontAwesomeIcon icon={faHeart} style={{ width: '50px', height: '50px', color: 'red', backgroundColor: 'pink' }} />
      </button>
            </div>

            
        </div>
            
        </div>
    )
}
export default ProductoList