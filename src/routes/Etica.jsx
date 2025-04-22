import { useEffect, useState } from "react";
import "../assets/web/assets/mobirise-icons2/mobirise2.css"
import "../assets/bootstrap/css/bootstrap.min.css"
import "../assets/bootstrap/css/bootstrap-grid.min.css"
import "../assets/bootstrap/css/bootstrap-reboot.min.css"
import "../assets/parallax/jarallax.css"
import "../assets/web/assets/gdpr-plugin/gdpr-styles.css"
import "../assets/dropdown/css/style.css"
import "../assets/socicon/css/styles.css"
import "../assets/theme/css/style.css"
import "../assets/mobirise/css/mbr-additional.css"
import "../assets/mobirise/css/pdf.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import "@react-pdf-viewer/core/lib/styles/index.css"
import Navbar from './components/Navbar';
import integridade from '../assets/integridade.pdf'
import privacy from '../assets/privacidade.pdf'
import brind from '../assets/brindes.pdf'
import relashioship from '../assets/relashioship.pdf'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { AiOutlineDownload } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import SectionScreen from "./components/SectionScreen";
function Home() {

    const [topic, setTopic] = useState(null)
    const newPlugin = defaultLayoutPlugin({ toolbarPlugin: {} })
    console.log(topic)

    return (<div>
        <Navbar />

        <SectionScreen />

        <section data-bs-version="5.1" class="features12 cid-tnY53ZOnEo" id="features13-n">

            <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2"><strong>Ética e condutas</strong></h3>



            <div class="container">
                <div class="row justify-content-center">

                    <section data-bs-version="5.1" class="content6 cid-tvpj4jo9VM" id="content6-1n">

                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12">
                                    <hr class="line" />
                                    <p class="mbr-text align-left mbr-fonts-style my-4 display-7">A Real Energy tem sua atuação alinhada com o respeito à cultura e às leis vigentes do país em que atua e preocupação constante de atender às suas normas internas para preservar sua integridade.<br />Através de nossos colaboradores, agimos sempre com ética, idoneidade e transparência.<br />Conheça as nossas políticas que pautam nossas diretrizes, tomadas de decisões e o modo como nos relacionamos com a sociedade.&nbsp;<br /> </p>
                                    <hr class="line" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2"><strong>Nosso código de conduta</strong></h3>

                    <section data-bs-version="5.1" class="content6 cid-tvpj4jo9VM" id="content6-1o">

                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12 mb-5">
                                    <hr class="line" />
                                    <p class="mbr-text align-left mbr-fonts-style my-4 display-7">&nbsp;O Código de Conduta da Real Energy deve servir como guia em todas as unidades, incluindo os locais de prestação de serviço onde colaboradores se fazem presente, para nortear as suas ações e relações com o público em geral com o qual mantém contato, tais como: colegas de trabalho, clientes, fornecedores, governo, parceiros de negócio, no tocante a atributos éticos, morais e legais.</p>
                                    <hr class="line" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2"><strong>Prevenção</strong></h3>

                    <section data-bs-version="5.1" class="content6 cid-tvpj4jo9VM" id="content6-1o">

                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12 mb-5">
                                    <hr class="line" />
                                    <p class="mbr-text align-left mbr-fonts-style my-4 display-7">&nbsp;Como forma de mitigar os riscos empresariais, a Real Energy dispõe do seu Código de Conduta Ética e políticas que devem ser observadas por todos os Colaboradores e terceiros que tenham relação com a empresa.<br /></p>
                                    <hr class="line" />
                                </div>
                            </div>
                        </div>
                    </section>



                    <div class="col-12 col-lg-12">

                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <h4 style={{ paddingBottom: '1em' }}>Conheça nossas políticas:</h4>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Código de Conduta
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <a href={integridade} download><button type="button" class="btn btn-primary btn-sm"> <AiOutlineDownload size={20} /> Baixar</button></a>
                                        <div className="pdf-container">
                                            <iframe src="https://drive.google.com/file/d/1-e8y2RTX48wfeu9tQqTwIlvfJ18_f8D_/preview" width="640" height="100%" allow="autoplay"></iframe>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Política de Privacidade
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                    <a href={privacy} download><button type="button" class="btn btn-primary btn-sm"> <AiOutlineDownload size={20} /> Baixar</button></a>
                                        <div className="pdf-container">
                                            <iframe src="https://drive.google.com/file/d/1DQlm5-lkRZIC-khXAv8cxJ0WqVoZFSGf/preview" width="640" height="100%" allow="autoplay"></iframe>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Política de Brindes e Hospitalidades
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                    <a href={brind} download><button type="button" class="btn btn-primary btn-sm"> <AiOutlineDownload size={20} /> Baixar</button></a>
                                        <div className="pdf-container">

                                            <iframe src="https://drive.google.com/file/d/1ruh4EGV3WCYBNq6njYrJK1C6ta9ivshY/preview" width="640" height="100%" allow="autoplay"></iframe>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Política de Relacionamento com o poder público
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                    <a href={relashioship} download><button type="button" class="btn btn-primary btn-sm"> <AiOutlineDownload size={20} /> Baixar</button></a>
                                        <div className="pdf-container">
                                            <iframe src="https://drive.google.com/file/d/1XZPQ1umtRYMmF33gZh4SXMr85goauPtS/preview" width="640" height="100%" allow="autoplay"></iframe>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

        </section>
        <section data-bs-version="5.1" class="content10 cid-tvpqjix1tk" id="content10-1r">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md">

                        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <h6 class="mbr-section-subtitle mbr-fonts-style mb-4 display-5">Canais de Comunicação&nbsp;</h6>
                            <p>Faça uma denúncia, <strong className="mbr-text-white"><Link to="/denuncia#form5-1v">clique aqui!</Link></strong></p>
                            <p class="mbr-fonts-style display-8">E-mail: denuncia@realenergy.com.br<br /><br /></p>
                        </div>
                        <h4 className="text-Orientation-center" style={{ textAlign: 'center' }}>Este Canal de comunicação permite o envio de Denúncias por qualquer interessado, seja colaborador, cliente ou terceiro que tiver conhecimento de fatos, provas ou indícios de ofensa a alguma norma ou política interna da Real Energy ou das leis brasileiras.
                            Informamos que a Real Energy trata os relatos ou ocorrências com imparcialidade, sigilo e permite o anonimato - se assim o denunciante preferir.</h4>
                    </div>

                </div>
            </div>
        </section>


        <Footer />
    </div>
    )
}




export default Home;