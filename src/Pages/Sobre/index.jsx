import React from "react";
import sobre from '../../Assets/Img/sobre.png'
import assinatura from '../../Assets/Img/assinatura.png'

import '../../Assets/Css/sobre.css'
import '../../Assets/Css/sobreResponsive.css'

import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";

export const Sobre = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <section className="sectionUmSobre">
                    <h2 className="inicioSection inicioSectionParaBaixo">Bolos Júlia</h2>
                    <div className="divPaiSobre">
                        <div>
                            <img src={sobre} alt="Confeiteiro penerando cacau em pó" className="confeiteiro"/>
                        </div>
                        <div className="textoSobre">
                            <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatr </p>
                        </div>
                    </div>
                </section>
                <section className="sectionUmSobre">
                    <h2 className="inicioSection inicioSectionMargin">Clube Assinatura</h2>
                    <div className="nucleoSectionSobreDois">
                        <div>
                            <img src={assinatura} alt="Foto de biscoitos amanteigados" className="biscoitos" />
                        </div>
                        <div className="textoNucleoSobreDois">
                            <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Sobre