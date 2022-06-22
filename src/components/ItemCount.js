import { useState, useEffect } from "react";
import '../components/itemCount.css';
import Swal from 'sweetalert2'; 
import Button from 'react-bootstrap/Button'



function ItemCount({stock}) {
    const [ num, setNum ] = useState(0);

    useEffect(() => {
        console.log('hola');
        if(num == stock -2){
            Swal.fire({
                title: 'Atencion!',
                text: 'Queda poco quedan mas ',
                icon: 'error',
                timer: 2000
              })
        }
    }, [num])

    const suma = () => {
        if(num < stock ){
            setNum(num + 1)
        }  
        else { 
            Swal.fire({
                title: 'Atencion!',
                text: 'No quedan mas ',
                icon: 'error',
                timer: 2000
              })
        }              
    }

    const resta = () => {
       
            if (num>0) {
                setNum(num - 1)

            }
        
    }
    const clear = () => {
        setNum(0)
    }
    const mostrar = () => {
        console.log ("CULO", num);
    }
    return (
     <div className=" conenedorBotones container-xl">
        <Button className="botoncito" variant="success"onClick={suma}>+</Button>{' '}
        <input className="casilla" type="number" value={num}/>
        <Button className="botoncito" variant="success" onClick={resta}>-</Button>
        <div>
        <Button className="botoncito" variant="success" onClick={clear}>Borrar</Button>
        <Button className="botoncito" variant="success" onClick={mostrar}> { num >0 ? `Añadir ` : `Selecciona la Cantidad` }</Button>
        <p>{stock > 1 ? ` ${ stock}  unidades disponibles` : `${stock} unidad disponible`}</p>
        </div>
     </div>   
    )
}
export default ItemCount;