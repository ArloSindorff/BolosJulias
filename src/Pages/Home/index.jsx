import React from "react";
import './style.css'
import '../../Assets/Css/home.css'
import '../../Assets/Css/homeResponsive.css'
import Header from '../../Components/header/header'
import Footer from "../../Components/footer/footer";
import cupcakes from '../../Assets/Img/cupcakes.png'
import cenoura from '../../Assets/Img/cenoura.png'
import fuba from '../../Assets/Img/fuba.png'
import laranja from '../../Assets/Img/larnja.png'

export default class Home extends React.Component {

    render(){
        return(
            <>
                <Header></Header>
                <main>
                    <div className="divH1Home">
                        <h1 className="bemvindo">Seja bem vindo ao bolos Júlia</h1>
                    </div>
                    <img src={cupcakes} alt="Foto de cupcakes" className="cupcakes"/>
                    <section className="sectionHomeUm">
                        <div>
                            <h2 className="inicioSection">Mais vendidos</h2>
                        </div>
                        <div className="divBolos">
                            <div className="bolosAlinhamento">
                                <img src={cenoura} alt="Foto de um bolo de cenoura" className="bolos"/>
                                <p className="descricaoBolos">Bolo de Cenoura</p>
                            </div>
                            <div className="bolosAlinhamento">
                                <img src={fuba} alt="Foto de um bolo de fubá" className="bolos"/>
                                <p className="descricaoBolos">Bolo de Fubá</p>
                            </div>
                            <div className="bolosAlinhamento alinahmentoLaranja">
                                <img src={laranja} alt="Foto de um bolo de laranja" className="bolos"/>
                                <p className="descricaoBolos">Bolo de Laranja</p>
                            </div>
                        </div>
                    </section>
                    <section className="section2">
                        <div>
                            <h2 className="inicioSection">Aproveite</h2>
                        </div>
                        <div className="alinhamentoSaibaMais">
                            <div className="divsSaibaMais">
                                <h3 className="infosSaibaMais">Clube Assinatura</h3>
                                <p className="tamanhoTextoHome">Se torne cliente fidelizado e receba divresas vantagens</p>
                                <button className="buttomSaibaMais">Saiba mais</button>
                            </div>
                            <div className="divsSaibaMais">
                                <h3 className="infosSaibaMais">Monte-se bolo</h3>
                                <p className="tamanhoTextoHome">Escolha os ingredientes e receba um bolo feito para você</p>
                                <button className="buttomSaibaMais">Saiba mais</button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer></Footer>
            </>
        )
    }
}