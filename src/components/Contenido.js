import '../components/Contenido.css'
import Card from '../components/Card'
import { useEffect } from 'react';
import { useState } from 'react';
//import img01 from '../assets/img/img01.jpg'

function Contenido() {
  
 // const [info, setInfo] =useState ([])
 // OTRA OPCION PARA LINEA 28 {info && info.map(i => <Card product={i.nombre} price={i.price} />)}
  const [info, setInfo] =useState ([])


  useEffect(()=>{
    fetch('data.json')
    .then( (resp )  => resp.json())
    .then((data)=> setInfo(data))

  }, [])
  
  return (
          <section className="contenido">
            <div>
            <h2>Bienvenidos a Click Ofertas</h2>
            <p>Selecciona tu Producto y obtenes la mejor OFERTA!!</p>
            </div>
            <div className='listado'>
            {info.map(i => <Card product={i.nombre} price={i.price} imgurl={i.imgurl}/>)}
            
            </div>
          </section> 
        );
      }
    
export default Contenido;
