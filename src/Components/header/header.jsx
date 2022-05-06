import React from "react";
import '../../Assets/Css/header.css'
import imagem from '../../Assets/Img/logo.png'
import { Link } from "react-router-dom";
import '../../Assets/Css/headerResponsive.css'

const Header = () => {
    return(
        <div>
            <div className="header">
                <div className="alinhamentoHeader">
                    <div className="primeiraParte">
                        <div className="nucleo">
                            <img src={imagem} alt="Lodo bolos Júlia" />
                        </div>
                    </div>
                    <div className="segundaparte">
                        <button> <Link to='/' className="link">Home</Link> </button>
                        <button> <Link to='/Sobre' className="link">Sobre</Link> </button>
                        <button> <Link to='/Bolo' className="link">Bolos</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header