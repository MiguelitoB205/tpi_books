import React from 'react'
import { Link, Outlet} from 'react-router-dom'
    

const CategoriaList = ({item}) => {
    const {categoria_id, nombre} = item

  return (
    <div >
      <div  >
            <Link to={'/categoriaDetalle/' + categoria_id}  >
          <div >  
            <button type="button"
      style={{ backgroundColor: 'darkblue', 
      fontSize: '20px', color: 'aquamarine', 
      borderRadius: '45px', width:'150px', height:'50px'
    }}>{nombre}</button>
            </div>
            </Link>
            </div>
        
        <Outlet/>
    </div>
    
  )
}

export default CategoriaList
