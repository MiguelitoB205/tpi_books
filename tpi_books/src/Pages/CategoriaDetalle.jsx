import React from "react"
import   {useParams}  from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useState } from 'react'

import { useLocalStorage } from "../Components/useLocalStorage"
import ProductoList from "../Components/ProductoList"

const CategoriaDetalle= () => {
 
 
  const [libros, setLibros]= useState ( [
    {
      id: 1,
      imagen: 'https://storage.googleapis.com/catalogo-libros/extralarge/bd060bfa-a375-991a-06ec-5eea8e6d4998_imagen.PNG',
      nombre: 'Sagrada Biblia Latinoamericana',
        titulo:'Sagrada Biblia Latinoamericana',
        autor: 'Varios',
        categoria: 'Filosofía y religión',
        precio: '$120.990',
        resena: 'Libro apto para orar, contiene las enseñanzas de nuestro Señor Jesucristo.De igual modo cuenta la historia de un pueblo que comenzó a experimentar la providencia Divina, y como nace el culto a Dios.',
        categoria_id: 1
      
      
    },
    {
      id: 2, imagen:'https://i.ebayimg.com/images/g/6HQAAOSwWxRl4MXI/s-l960.jpg',nombre: 'Pinocho', titulo:'Pinocho',
        autor:'Carlo Colodi', categoria: 'Infantil',precio: '$340.990', resena: 'Se trata de un niño que nace de una obra de arte por Geppetto el carpintero, quien al decir mentiras, le crece la nariz, muy divertida historia para los niños que quieren aprender',
        categoria_id: 6
      
    },
    {
      id:3,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/363554-1200-auto?v=637366676080330000&width=1200&height=auto&aspect=true',
      nombre: 'La patasola',
      
        titulo: 'La patasola',
        autor: 'Beatriz Caballero, Iván Cardozo y Esmeralda Pinzón',
        categoria: 'Literatura',
        precio: '$230.990',
        resena: 'Para los amantes de los mitos y leyendas, es un excelente libro que ofrece gran entretenimiento a los lectores.',
        categoria_id: 7
      }
    ,
    {
      id:4,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/171593-600-auto?v=636209442788070000&width=600&height=auto&aspect=true',
      nombre: 'Romeo and Julieth',
      
        titulo: 'Romeo and Julieth',
        autor: 'William Shakespeare',
        categoria: 'Literatura en inglés',
        precio: '$90.990',
        resena: 'Para los que quieran aprender inglés leyendo, es una obra que se trata de de dos familias en disputa, de las cuales salen la legendaria pareja que, al casarse, se genera un conflicto entre aquéllos.',
        categoria_id: 8
      

    },
    {
      id: 5,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/478228-800-auto?v=638095746914400000&width=800&height=auto&aspect=true',
      nombre: 'Atlas de Colombia y del Mundo',
      
        titulo: 'Atlas de Colombia y del Mundo',
        autor: 'Varios',
        categoria: 'Historia y Geografía',
        precio: '$180.990',
        resena: 'Ofrece información interesante sobre la geografía de nuestro país y del mundo entero. Contiene información de croquis, océanos, hidrografía, relieve y también explica la división política de Colombia y de todos los continentes',
        categoria_id: 5
      
    },
    {
      id: 6,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/306415-800-auto?v=636778917865400000&width=800&height=auto&aspect=true',
      nombre: 'Brújula para el mundo contemporáneo',
      
        titulo:'Brújula para el mundo contemporáneo',
        autor: 'Diana Uribe',
        categoria: 'Historia y geografía',
        precio: '$450.990',
        resena: 'Diana Uribe es una excelente historiadora, quien relata los hechos históricos, quien además sigue relatando la historia contemporánea',
        categoria_id: 5
      
    },
    {
      id: 7,
      imagen:'https://upinforma.com/nuevo/images/noticias/gabo.jpg',
      nombre: 'Relato de un náufrago',
      
        titulo: 'Relato de un náufrago',
        autor: 'Gabriel García Márquez',
        categoria: 'Literatura',
        precio: '$230.990',
        resena: 'Gabriel García Márquez era un excelente autor de libros colombianos, uno de ellos, relatos de un náufrago, historia que relata el testimonio de un marinero que sufre el naufragio al momento de regresar a Colombia, que fue una experiencia súper dura de supervivencia.',
        categoria_id: 7
      
    },
    {
      id: 8,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/483261-800-auto?v=638126093090500000&width=800&height=auto&aspect=true',
      nombre: 'Álgebra de Baldor',
      
        titulo: 'Algebra de Baldor',
        autor: 'Aurelio Baldor',
        categoria: 'Matemáticas',
        precio: '$360.990',
        resena: 'Para los amantes de las matemáticas y el álgebra, es un manual en donde aparecen ejercicios para el desarrollo de la lógica matemática',
        categoria_id: 4
      
    },
    {
      id: 9,
      imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/61/dd/61ddbfdec1a7bfeee392cc0f29af52af.jpg',
      nombre: 'Historia de la matemática',
      
        titulo: 'Historia de la matemática',
        autor: 'Carl B. Boyer',
        categoria: 'Matemáticas',
        precio: '$230.990',
        resena: 'Libro que cuenta el origen de los números que conocemos y como a lo largo de la historia se ha desarrollado la lógica matemática.',
        categoria_id: 4
      
    },
    {
      id: 10,
      imagen:'https://images.cdn3.buscalibre.com/fit-in/360x360/fa/50/fa500f5878c50872066bdfb4ebc65b89.jpg',
      nombre: 'Poemas de otros',
      
        titulo: 'Poemas de otros',
        autor: 'Mario Benedetti',
        categoria: 'Poesía',
        precio: '$460.990',
        resena: 'Para los fanáticos de la poesía, es un libro para aprender a dedicar poemas y canciones a sus parejas, escrito por un gran poéta sudamericano.',
        categoria_id: 2
      
    },{
      id: 11,
      imagen: 'https://www.librerialemus.com/imagenes/9788467/978846702528.GIF',
      nombre: 'Historia de la filosofía',
      titulo: 'Sin temor ni temblor',
      autor: 'Fernando Savater',
      categoria: 'Filosofía y religión',
      precio: '$290.999',
      resena: 'Es un recorrido históirico, comenzando por los orígenes de esta corriente con Sócrates, luego se continúa con Platón y con Aristóteles. Se menciona sobre la dialéctica, el origen del capital, como usar el razonamiento. Libro apto para aquéllos que quieren apoprender la filosofía.',
      categoria_id: 1
    },{ id: 12, imagen: 'https://files.logoscdn.com/v1/assets/1400593/optimized?w=250&m=limit&h=254', nombre: 'Catecismo de la Iglesia Católica',titulo: 'Catecismo de la Iglesia Católica', autor: 'Juan Pablo II', categoria: 'Filosofía y religión', precio: '$36.000', resena: 'Contiene estractos de la Biblia, explicaciones de cómo vivir la fé católica, cuáles son los Sacramentos, los 10 mandamientos de Dios, los mandamientos de la Iglesia, qué pecados impiden comulgar del cuerpo de Cristo y también cómo orar a Dios', categoria_id: 1 },
    { id: 13, imagen: 'https://books.google.com.co/books/publisher/content?id=xzJjBgAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1eTrwwEJZSFxORwKrzaeE5C-a9Uw&w=1280', nombre: 'Crónica de una muerte anunciada', titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez', categoria: 'Literatura', precio: '$123.000', resena: 'Para los amamntes del suspenso, es un libro entretenido, escrito por un gran autor colombiano que ganaba premios Nóbel de Literatura', categoria_id: 7},
    { id: 14, imagen: 'https://libreriadelau.vtexassets.com/arquivos/ids/31989090-800-auto?v=638223751227000000&width=800&height=auto&aspect=true', nombre: 'Economía ecológica y educación', titulo: 'Economía ecológica y educación', autor: 'José García y Alma Navarro', categoria: 'Ciencias Naturales', precio: '$44.000', resena: 'Aquéllos que quieren aprender a cuidar el medio ambiente, este es un ejemplar para seguir las pautas de cómo hacerlo.', categoria_id: 3}, 
    {id: 15, imagen: 'https://www.tornamesa.co/imagenes_grandes/9789588/978958894051.GIF', nombre: ' La Clave Secreta del Universo', titulo: 'La Clave Secreta del Universo', autor: 'Lucy & Steve Hawking', categoria: 'Ciencias Naturales', precio: '$50.000', resena: 'Para aquéllos que les gusta explorar el universo y conocer la verdad, este es un ejemplar para adquirir conocimiento astronómico, cómo se forman las galaxias y como fueron formados los planetas.', categoria_id: 3},
    { id: 16, imagen: 'https://makemake.com.co/makemake/fichas/MM1474/art/portadaOptim.jpg', nombre: 'Caperucita Roja y otras historias perversas', titulo: 'Caperucita Roja y otras historias perversas',
   autor: 'Triunfo Arciniégas', categoria: 'Infantil', precio: '$59.990', resena: 'Para los amantes de la literatura infantil, este es un ejemplar para leerlo y entretenerse. Escrito por Triunfo Arciniégas, un gran autor de la literatura infantil',
    categoria_id: 6  }
    
  ])
  const [favoritos, setFavoritos] = useState([])

  
  
  
  
  const params = useParams()
   
  const categoriasFiltradas = libros.filter((libro => libro.categoria_id===Number(params.categoria_id)) ) 
  
    
   
  
    return(
      <>
      <Header/>
      <div style={{padding: '35px', textAlign: 'center'}}>

        <h1 style={{ fontSize: '60px', color: 'darkblue' }}>Los libros más populares</h1>
        
       </div>
        <div style={{display: 'grid', gridTemplateColumns: '33% 33% 33%', backgroundColor: 'violet'}}>

        
        {categoriasFiltradas.map(category =>  <ProductoList favoritos={favoritos} setFavoritos={setFavoritos} key={category.categoria_id} objeto={category} />
          )} 
          </div>
         
        
            <h2 style={{ color: 'darkblue', fontSize: '45px', padding: '45px'}}>Tus libros favoritos</h2>
          <div>
            <ul style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
              
              {favoritos.map(favorito => (
                <ul style={{backgroundColor: 'lightblue', margin: '30px', padding: '35px', borderRadius: '25px'}} key={favorito.id}>
                  <h3>{favorito.nombre}</h3>
                  <p><img src={favorito.imagen} alt="" width='150px' height='160px' /></p>
                  <p><strong>Título: </strong>{favorito.titulo}</p>
                  <p><strong>Autor: </strong>{favorito.autor}</p>
                  <p><strong>Categoría: </strong>{favorito.categoria}</p>
                  <p>{favorito.precio}</p>
                  <p><strong>Descripción: </strong> {favorito.resena}</p>
                 
                  <ul>
               
                  </ul>
             
                </ul>
              ))}
            </ul>
          </div>
     <Footer/>
    </>
      
      )
    }
export default CategoriaDetalle