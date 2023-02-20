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


function Home() {




  return (<div>


    <Navbar />
    <section data-bs-version="5.1" class="header1 cid-s48MCQYojq mbr-fullscreen mbr-parallax-background" id="header1-f">

      <div class="mbr-overlay" style={{
        opacity: 0.5,
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
                <h4 class="card-title mbr-fonts-style mb-4 display-2">
                  <strong>Quem somos?&nbsp;</strong></h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-7">
                  A RealEnergy é uma organização que foi constituída no ano de 1992 tendo como atividade principal a representação de materiais elétricos.</p>
                <div class="mbr-section-btn"><a class="btn btn-primary display-4" href="#"><span class="socicon socicon-bale mbr-iconfont mbr-iconfont-btn"></span>CONHEÇA</a></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="item mbr-flex">
              <div class="icon-box">
                <span class="mbr-iconfont mobi-mbri-setting mobi-mbri"></span>
              </div>
              <div class="text-box">
                <h4 class="icon-title mbr-black mbr-fonts-style display-7"><strong>Obras em andamento</strong></h4>
                <h5 class="icon-text mbr-black mbr-fonts-style display-4">Atualmente nos temos um total de 50 obras em andamento e temos excelência no que fazemos.</h5>
              </div>
            </div>
            <div class="item mbr-flex">
              <div class="icon-box">
                <span class="mbr-iconfont mobi-mbri-map-pin mobi-mbri"></span>
              </div>
              <div class="text-box">
                <h4 class="icon-title mbr-black mbr-fonts-style display-7">
                  <strong>Fomos mais longe</strong></h4>
                <h5 class="icon-text mbr-black mbr-fonts-style display-4">Atuamos em diversas regiões do território Brasileiro. Estamos mudando a vida das pessoas por meio de nossas obras nas regiões: Norte, Nordeste, Suldeste e Sul.</h5>
              </div>
            </div>
            <div class="item mbr-flex">
              <div class="icon-box">
                <span class="mbr-iconfont mobi-mbri-protect mobi-mbri"></span>
              </div>
              <div class="text-box">
                <h4 class="icon-title mbr-black mbr-fonts-style display-7">
                  <strong>Segurança</strong></h4>
                <h5 class="icon-text mbr-black mbr-fonts-style display-4">Trabalhamos com os mais sofisticados equipamentos/treinamentos de segurança para garantir a melhor execução dos nossos serviços e a segurança de nossos colaboradores. </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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


    <SocialItens />
    



  </div>
  )
}




export default Home;