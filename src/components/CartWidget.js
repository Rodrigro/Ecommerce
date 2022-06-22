import imagen from '../assets/img/carro.png'
import '../components/CartWidget.css'

function CartWidget() {
    return (
      <div class="img-carro">
            <img src= {imagen} width="20px"/>
      </div>
      );
}

export default CartWidget;