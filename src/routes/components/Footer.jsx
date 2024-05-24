import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

function Footer() {

    const [cookiesHide, setCookiesHide] = useState(true)


    function handletSetCookies() {
        localStorage.setItem('cookiesHide', false)
        console.log('cookie setted')
        let cookieBanner = document.getElementById("cb-cookie-banner");
        cookieBanner.style.display = "none";
    }

    function handlernotSet() {
        let cookieBanner = document.getElementById("cb-cookie-banner");
        cookieBanner.style.display = "none";
    }

    useEffect(() => {
        async function getCookiesState() {
            const cookieState = await localStorage.getItem('cookiesHide')
            if (cookieState) {
                setCookiesHide(false)
            }
        }
        getCookiesState()
    }, [])


    return <section data-bs-version="5.1" class="footer3 cid-s48P1Icc8J" once="footers" id="footer3-i">

        <div class="container">
            <div class="media-container-row align-center mbr-white">
                <div class="row social-row">
                    <div class="row row-links">
                        <ul class="foot-menu">

                            <li class="foot-menu-item mbr-fonts-style display-7"><Link to="/about#image2-10" style={{ color: 'white' }}>Quem Somos</Link></li>
                            <li class="foot-menu-item mbr-fonts-style display-7"><Link to="/contato" style={{ color: 'white' }}>Contato</Link></li>
                            <li class="foot-menu-item mbr-fonts-style display-7"><Link to="/denuncia#form5-1v" style={{ color: 'white' }}>Denúncias</Link></li>


                        </ul>
                    </div>
                    <div class="social-list align-right pb-2 socialflex" >

                        <div class="soc-item">
                            <a href="https://instagram.com/energyreal" target="_blank">
                                <span class="mbr-iconfont mbr-iconfont-social socicon-instagram socicon"></span>
                            </a>
                        </div>


                    </div>
                </div>
                <div class="row row-copirayt">
                    <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7 copy_cinza">
                        © Copyright 2024-2025 REALENERGY. All Rights Reserved.
                    </p>
                </div>
                <br />
                <div class="row row-links">
                    <ul class="foot-menu">
                        <Link to='/etica'><li class="foot-menu-item mbr-fonts-style display-7" style={{ color: 'white' }}>Termos de uso</li></Link>
                        <Link to='/etica'><li class="foot-menu-item mbr-fonts-style display-7" style={{ color: 'white' }}>Política de Privacidade</li></Link>
                        <Link to='/etica'><li class="foot-menu-item mbr-fonts-style display-7" style={{ color: 'white' }}>Política de Cookies</li></Link>

                    </ul>
                </div>
            </div>
        </div>
        {
            cookiesHide ?
                <div id="cb-cookie-banner" class="alert alert-cookies text-center mb-0" role="alert">
                    🍪 <strong>Esse site usa cookies. </strong>Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com essa utilização. <br /> <a><u>Politica de Privacidade</u></a>
                    <div className="buttonGroup">
                        <button type="button" class="btn btn-light btn-sm ms-3" onClick={handletSetCookies}>
                            Prosseguir
                        </button>
                        <button type="button" class="btn btn-light btn-sm ms-3" onClick={handlernotSet} >
                            Rejeitar
                        </button>
                    </div>

                </div> : null

        }
    </section>

}

export default Footer;