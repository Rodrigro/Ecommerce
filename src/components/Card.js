import '../components/Card.css'
import ItemCount from '../components/ItemCount'



function Card (props){
    return (
        <div className='card prods'>
            <h4>{props.product}</h4>
            <p>{props.price}</p>
            <img src={props.imgurl} width="300px" />
            <ItemCount />
            

        </div>
    );
}
export default Card;