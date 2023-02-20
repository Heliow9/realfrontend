import React, { useState, useEffect } from 'react';
import Cep from "react-simple-cep-mask";
import cep from 'cep-promise'
import FornecedorForm from './components/forms/FornecedorForm';
import Navbar from './components/Navbar';
// import { Container } from './styles';

function Fornecedor() {
    const [cepresult, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");

    function handlerGetAndress() {
        cep(cepresult).then((result) => {
            setEndereco(result.street)
            setCidade(result.city)
            setBairro(result.neighborhood)
        })
    }

    if (cepresult.length >= 8) {
        handlerGetAndress(cepresult)
    }

    return <div>
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

        <FornecedorForm />

    </div>
}

export default Fornecedor;