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
import Navbar from './components/Navbar';
import "../assets/mobirise/css/pdf.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import "@react-pdf-viewer/core/lib/styles/index.css"
import teste from '../assets/integridade.pdf'
import fachada from './assets/images/6-768x1024.jpg';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import Footer from "./components/Footer";
import SectionScreen from "./components/SectionScreen";
function About() {

    const [topic, setTopic] = useState(null)
    const [viewPDF, setViewPDF] = useState(teste);
    const newPlugin = defaultLayoutPlugin()

    console.log(topic)

    return (<div>
        <Navbar />
        <SectionScreen />

        <section data-bs-version="5.1" class="testimonials1 cid-txhzz3uKD5 aboutHader" id="testimonials1-1x">
    

    
    
    <div class="container">
        <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2"><strong>Conheça nossa história.</strong></h3>
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                <div class="image-wrapper">
                    <img src={fachada} alt="RealEnergy Fachada" />
                </div>
            </div>
            <div class="col-12 col-md">
                <div class="text-wrapper">
                    <p class="mbr-text mbr-fonts-style mb-4 display-7 text-Orientation"><br />A Real Energy é uma empresa privada criada em 1992, cuja atividade inicial foi a representação de materiais elétricos. Ao longo dos nossos 30 anos de existência, completados em 2022, desenvolvemos diversas atividades no setor elétrico. Participamos de programas de eletrificação rural e realizarmos atividades em linhas de transmissão e subestações de energia em tensão de até 500 kV, além de obras de infraestrutura urbana. Em 2015, nos especializamos em gestão de parques de iluminação pública e privada, detendo vasto know-how em luminárias LED e telemetria. Com uma plataforma computacional própria, a REAL LUME, executamos uma gestão completa, inteligente e eficiente das unidades consumidoras de iluminação, possibilitando uma redução de até 65% no consumo de energia. A Real Energy possui atualmente no seu quadro técnico profissionais altamente capacitados nas mais diversas áreas das engenharias, dentre elas: eletromecânica, eletroeletrônica, civil, light design, química e arquitetura. Além disso, contamos com centenas de outros profissionais das mais diversas áreas que contribuem para o desenvolvimento das nossas atividades. O crescimento da empresa ao longo dos seus 30 anos de existência vem ocorrendo em razão da busca incessante de implementar novas tecnologias na sua atuação, o que foi capaz de possibilitar o desenvolvimento dos diversos modelos de negócios que dominamos e que nos tornou uma empresa de referência na nossa área de atuação, inovando no fornecimento de serviços e produtos com a preocupação constante de garantir a satisfação dos seus clientes e parceiros de negócios.</p>
                    
                    
                </div>
            </div>
        </div>
    </div>
</section>

        <section data-bs-version="5.1" class="content8 cid-trUQE2a9xy" id="content8-19">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="counter-container col-md-12 col-lg-12">

                        <div class="mbr-text mbr-fonts-style display-4">
                            <ul>
                                <li className="text-Orientation"><strong>MISSÃO:</strong>&nbsp; &nbsp; &nbsp;contribuir com o mercado da engenharia, com o desenvolvimento de novos produtos e serviços, assegurando-os de acordo com os melhores padrões existentes e com as normas globais de qualidade e técnica. produtos e serviços, assegurando-os de acordo com os melhores padrões existentes e com as normas globais de qualidade técnica .</li>
                                <li className="text-Orientation"><strong>VISÃO:</strong>&nbsp; &nbsp;É sermos referência no progresso do setor energético no Brasil e no mundo com a nossa já conhecida qualidade, inovação, eficiência e tratamento respeitoso com nossos colaboradores, clientes, parceiros e com a sociedade. Para isso buscamos fortalecer nossos VALORES através do nosso compromisso com o desenvolvimento econômico, social, cultural e sustentável, que privilegiam a confiança nas nossas equipes e no relacionamento duradouro com o cliente e a sociedade.</li>
                                <li className="text-Orientation"><strong>VALORES:</strong>&nbsp; &nbsp;Trabalhamos através do nosso compromisso com o desenvolvimento econômico, social, cultural e sustentável, que privilegiam a confiança nas nossas equipes e no relacionamento duradouro com o cliente e a sociedade.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Footer />

    </div>
    )
}




export default About;