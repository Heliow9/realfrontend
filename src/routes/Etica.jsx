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
import teste from '../assets/integridade.pdf'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
function Home() {

    const [topic, setTopic] = useState(null)
    const [viewPDF, setViewPDF] = useState(teste);
    const newPlugin = defaultLayoutPlugin()

    console.log(topic)

    return (<div>
          <Navbar />
        
        <section data-bs-version="5.1" class="header1 cid-s48MCQYojq mbr-fullscreen mbr-parallax-background" id="header1-f">

            <div class="mbr-overlay" style={{
                opacity: 0.3,
                background: "rgb(68, 121, 217)"
            }}></div>

            <div class="align-center container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6">
                        <h1 class="mbr-section-title mbr-fonts-style mb-3 display-2"><strong>Inovando e fazendo história</strong></h1>

                        <p class="mbr-text mbr-fonts-style display-7"><strong>Pensamos em um mundo mais limpo, conectamos energia com pessoas. Somos a Real Energy, fazendo 30 anos de gestão no Brasil.</strong></p>

                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features12 cid-tnY53ZOnEo" id="features13-n">





            <div class="container">
                <div class="row justify-content-center">

                    <section data-bs-version="5.1" class="content6 cid-tvpj4jo9VM" id="content6-1n">

                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12">
                                    <hr class="line" />
                                    <h2>Ética e conduta</h2>
                                    <p class="mbr-text align-left mbr-fonts-style my-4 display-7">A Real Energy tem sua atuação alinhada com o respeito à cultura e às leis vigentes do país em que atua e preocupação constante de atender às suas normas internas para preservar sua integridade.<br />Através de nossos colaboradores, agimos sempre com ética, idoneidade e transparência.<br />Conheça as nossas políticas que pautam nossas diretrizes, tomadas de decisões e o modo como nos relacionamos com a sociedade.&nbsp;<br /> </p>
                                    <hr class="line" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <section data-bs-version="5.1" class="content6 cid-tvpj4jo9VM" id="content6-1o">

                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12 mb-5">
                                    <hr class="line" />
                                    <h2>Nosso código de conduta</h2>
                                    <p class="mbr-text align-left mbr-fonts-style my-4 display-7">&nbsp;O Código de Conduta da Real Energy deve servir como guia em todas a unidades, incluindo os locais de prestação de serviço onde colaboradores se fazem presente, para nortear as suas ações e relações com o público em geral com o qual mantém contato, tais como: colegas de trabalho, clientes, fornecedores, governo, parceiros de negócio, no tocante a atributos éticos, morais e legais.<br /></p>
                                    <hr class="line" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <div class="col-12 col-lg-12">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                                    Código de conduta
                                </button>
                                <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
                                    Política de Privacidade
                                </button>
                                <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                                    Política de Brindes e Hospitalidades
                                </button>
                                <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
                                    Politica de Relacionamento com o poder público
                                </button>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-12">
                        <div className="pdf-container">

                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js"  >
                                {viewPDF && <>
                                    <Viewer fileUrl={viewPDF} plugins={[newPlugin]} initialPage={topic} />
                                </>}
                            </Worker>


                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section data-bs-version="5.1" class="content10 cid-tvpqjix1tk" id="content10-1r">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md">

                        <h6 class="mbr-section-subtitle mbr-fonts-style mb-4 display-5">Canais de Comunicação&nbsp;</h6>
                    </div>
                    <div class="col-md-12 col-lg-4">
                        <p class="mbr-fonts-style display-7">Email:&nbsp;E-mail: denuncia@realenergy.com.br<br /><br />Faça uma denuncia anónima, <strong className="mbr-text-white">clique aqui !</strong></p>
                    </div>
                </div>
            </div>
        </section>



    </div>
    )
}




export default Home;