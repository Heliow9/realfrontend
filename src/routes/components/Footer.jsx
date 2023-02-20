import React, { useState } from 'react';

// import { Container } from './styles';

function Footer() {

    const [cookiesHide, setCookiesHide] = useState(false)


    return <section data-bs-version="5.1" class="footer3 cid-s48P1Icc8J" once="footers" id="footer3-i">

        <div class="container">
            <div class="media-container-row align-center mbr-white">
                <div class="row social-row">
                    <div class="row row-links">
                        <ul class="foot-menu">

                            <li class="foot-menu-item mbr-fonts-style display-7">Quem Somos</li>
                            <li class="foot-menu-item mbr-fonts-style display-7">Contato</li>
                            <li class="foot-menu-item mbr-fonts-style display-7">Denuncias</li>


                        </ul>
                    </div>
                    <div class="social-list align-right pb-2 socialflex" >

                        <div class="soc-item">
                            <a href="https://instagram.com/mobirise" target="_blank">
                                <span class="mbr-iconfont mbr-iconfont-social socicon-instagram socicon"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                                <span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://www.youtube.com/c/mobirise" target="_blank">
                                <span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div>

                        </div>


                    </div>
                </div>
                <div class="row row-copirayt">
                    <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7 copy_cinza">
                        © Copyright 2023 REALENERGY. All Rights Reserved.
                    </p>
                </div>
                <br />
                <div class="row row-links">
                    <ul class="foot-menu">
                        <li class="foot-menu-item mbr-fonts-style display-7">Termos de uso</li>
                        <li class="foot-menu-item mbr-fonts-style display-7">Política de Privacidade</li>
                        <li class="foot-menu-item mbr-fonts-style display-7">Política de Cookies</li>

                    </ul>
                </div>
            </div>
        </div>
        {
            cookiesHide ? <div id="cb-cookie-banner" class="alert alert-cookies text-center mb-0" role="alert">
                🍪 <strong>Esse site usa cookies. </strong>Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nosso serviços você concorda com tal monitoramento. <br /> <a><u>Politica de Privacidade</u></a>

                <button type="button" class="btn btn-light btn-sm ms-3" onclick="window.cb_hideCookieBanner()">
                    aceitar
                </button>
                <button type="button" class="btn btn-light btn-sm ms-3" onclick="window.cb_hideCookieBanner()">
                    sair
                </button>
            </div> : null

        }
    </section>

}

export default Footer;