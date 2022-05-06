import React from "react";
import '../../Assets/Css/footer.css'
import face from '../../Assets/Img/face1.png'
import insta from '../../Assets/Img/instag1.png'
import whats from '../../Assets/Img/whats1.png'
import '../../Assets/Css/footerResponsive.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="alinhamento">
                <div className="direitos">
                    <p>Todos os direitos reservados</p>
                </div>
                <div className="paraMais">
                    <div className="imgLogos">
                        <img src={whats} alt="Logo do WhatsApp" />
                    </div>

                    <div className="imgLogos">
                        <img src={face} alt="Logo do Facebook" />
                    </div>

                    <div className="imgLogos">
                        <img src={insta} alt="Logo do Instagram" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer