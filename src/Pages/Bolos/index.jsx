import React from "react";
import '../../Assets/Css/bolo.css'
import '../../Assets/Css/boloResponsive.css'

import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";

export const Bolo = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <section className="sectionUmBolo">
                    <h2 className="inicioSection eBolos">Bolos</h2>
                </section>
                <section className="sectionDoisBolo">
                    <div className="divNucleodaSection divNucleodaSectionParteUm">

                        <div className="cardsDepreços">
                            <div>
                                <p className="pBoloDeFuba">Bolo de Fubá</p>
                                <p className="pPreco"><span className="tamanhoPPreco">R$</span>15,00</p>
                            </div>
                            <div className="buttons">
                                <button className="buttonEditarCard">Editar</button>
                                <button className="buttonEcluirCard">Excluir</button>
                            </div>
                        </div>

                        <div className="cardsDepreços">
                            <div>
                                <p className="pBoloDeFuba">Bolo de Fubá</p>
                                <p className="pPreco"><span className="tamanhoPPreco">R$</span>15,00</p>
                            </div>
                            <div className="buttons">
                                <button className="buttonEditarCard">Editar</button>
                                <button className="buttonEcluirCard">Excluir</button>
                            </div>
                        </div>

                        <div className="cardsDepreços">
                            <div>
                                <p className="pBoloDeFuba">Bolo de Fubá</p>
                                <p className="pPreco"><span className="tamanhoPPreco">R$</span>15,00</p>
                            </div>
                            <div className="buttons">
                                <button className="buttonEditarCard">Editar</button>
                                <button className="buttonEcluirCard">Excluir</button>
                            </div>
                        </div>

                    </div>
                    <div className="divNucleodaSection divNucleodaSectionDois"> 

                        <div className="cardsDepreços">
                            <div>
                                <p className="pBoloDeFuba">Bolo de Fubá</p>
                                <p className="pPreco"><span className="tamanhoPPreco">R$</span>15,00</p>
                            </div>
                            <div>
                                <button className="buttonEditarCard">Editar</button>
                                <button className="buttonEcluirCard">Excluir</button>
                            </div>
                    
                        </div>
                        <div className="cardsDepreços">
                            <div>
                                <p className="pBoloDeFuba">Bolo de Fubá</p>
                                <p className="pPreco"><span className="tamanhoPPreco">R$</span>15,00</p>
                            </div>
                            <div>
                                <button className="buttonEditarCard">Editar</button>
                                <button className="buttonEcluirCard">Excluir</button>
                            </div>
                        </div>

                        <div className="cardsDepreços">
                            <div>
                                <p className="pBoloDeFuba">Bolo de Fubá</p>
                                <p className="pPreco"><span className="tamanhoPPreco">R$</span>15,00</p>
                            </div>
                            <div>
                                <button className="buttonEditarCard">Editar</button>
                                <button className="buttonEcluirCard">Excluir</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </section>
                <section className="sectionTresBolo">
                    <div className="alinhamentoDoCadastrar">
                        <p className="pDeCadastramento">Bolo</p>
                        <input className="inputDosCadastramentos" type="text" />
                    </div>
                    <div className="alinhamentoDoCadastrar">
                        <p className="pDeCadastramento">Preço</p>
                        <input className="inputDosCadastramentos" type="text" />
                    </div>
                    <div className="cadastrar">
                        <button className="buttonCadastrar">Cadastrar</button>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Bolo