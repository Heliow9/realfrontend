import React, { useState, useEffect } from 'react';
import Cep from "react-simple-cep-mask";
import cep from 'cep-promise'
import FornecedorForm from './components/forms/FornecedorForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionScreen from './components/SectionScreen';
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
        <SectionScreen />

        <FornecedorForm />
        <Footer />
    </div>
}

export default Fornecedor;