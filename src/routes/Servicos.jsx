import React, { useEffect } from 'react';
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
import SocialItens from './components/SocialItens';
import civil from './assets/images/1.jpg';
import iluminacao from './assets/images/2.png'
import transmissao from './assets/images/3.jpg'
import eolica from './assets/images/4.jpg'
import aeroporto from './assets/images/6.jpg'
import Footer from './components/Footer';
import SectionScreen from './components/SectionScreen';


function Servicos() {




  return (<div>


    <Navbar />
    <SectionScreen />


    <section data-bs-version="5.1" class="features4 cid-toLOfZtTw7" id="features5-s">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="card-wrapper">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="text-wrapper">

                    <h5 class="card-title mbr-fonts-style display-5">
                      <strong>Saneamento</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-5 display-4">- Operação. <br />
                      - Manuteção. <br />
                      - Construções. <br />
                      - Construção. <br />
                      - Ampliação de sistemas de distribuição de agua e esgotamento sanitário.</p>
                    <div class="mbr-section-btn">
                      <a href="#" class="btn btn-warning display-4">Leia mais</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="img-wrapper">
                    <img src={civil} alt="Construção Civil" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="card-wrapper">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="text-wrapper">

                    <h5 class="card-title mbr-fonts-style display-5">
                      <strong>Tecnologia da Informação</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-5 display-4">
                      - Telemetria de unidades de iluminação pública.<br />
                      - Aplicação mobile para gerenciamento de parques de iluminação pública.<br />
                      - Monitoramento de adultoras e bombas para sistemas de distribuição de água.<br />

                    </p>
                    <div class="mbr-section-btn">
                      <a href="#" class="btn btn-warning display-4">Leia mais</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="img-wrapper">
                    <img src={iluminacao} alt="Iluminação Pública" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="col-12 col-lg-6">
            <div class="card-wrapper">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="text-wrapper">

                    <h5 class="card-title mbr-fonts-style display-5">
                      <strong>Linhas de Transmissão</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-5 display-4">- Operação. <br />
                      - Manutenção. <br />
                      - Construção e ampliação de linhas de transmissão de 69kv até 500kv. <br />
                    </p>
                    <div class="mbr-section-btn">
                      <a href="#" class="btn btn-warning display-4">Leia mais</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="img-wrapper">
                    <img src={transmissao} alt="Construção Civil" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="card-wrapper">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="text-wrapper">

                    <h5 class="card-title mbr-fonts-style display-5">
                      <strong>Iluminação</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-5 display-4">
                      - Gestão completa de parques de  iluminação.<br />
                      - Iluminação Cénica ae decorativa.<br />
                      - Iluminação Industrial.<br />
                      - Iluminação Predial.<br />
                    </p>
                    <div class="mbr-section-btn">
                      <a href="#" class="btn btn-warning display-4">Leia mais</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="img-wrapper">
                    <img src={iluminacao} alt="Iluminação Pública" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="col-12 col-lg-6">
            <div class="card-wrapper">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="text-wrapper">

                    <h5 class="card-title mbr-fonts-style display-5">
                      <strong>Energia Éolica</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-5 display-4">- Operação e manutenção de torres de medição éolica e aerogeradores. <br />
                    </p>
                    <div class="mbr-section-btn">
                      <a href="#" class="btn btn-warning display-4">Leia mais</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="img-wrapper">
                    <img src={eolica} alt="Construção Civil" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="card-wrapper">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="text-wrapper">

                    <h5 class="card-title mbr-fonts-style display-5">
                      <strong>Aeroportos</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-5 display-4">- Operação e manutenção de torres de medição éolica e aerogeradores. <br />
                    </p>
                    <div class="mbr-section-btn">
                      <a href="#" class="btn btn-warning display-4">Leia mais</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="img-wrapper">
                    <img src={aeroporto} alt="Construção Civil" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>


    <Footer />

  </div>
  )
}




export default Servicos;