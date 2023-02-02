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
import teste from '../assets/integridade.pdf'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
function Home() {

    const [topic, setTopic] = useState(null)
    const [viewPDF, setViewPDF] = useState(teste);
    const newPlugin = defaultLayoutPlugin()

    console.log(topic)

    return (<div>
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
                    <div class="col-12 col-lg-6">
                        <div class="card-wrapper">
                            <div class="card-box align-left">

                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action active">
                                        Código de Conduta <br />
                                    </a>
                                    <a class="list-group-item list-group-item-action" onClick={() => setTopic(10)} >Política de Privacidade</a>
                                    <a href="#" class="list-group-item list-group-item-action">Política de brindes e hospitalidades </a>
                                    <a href="#" class="list-group-item list-group-item-action">Política de Relacionamento com o Poder Público</a>
                                </div>

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



    </div>
    )
}




export default Home;