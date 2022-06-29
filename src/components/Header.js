import './Header.css'
import img01 from '../assets/img/img01.jpg'

function Header() {
    
        return (
          <div className=" cabecera container-xl">
            <img className="cabe-logo" src={img01}/>
          </div> 
        );
      }
    
export default Header;
