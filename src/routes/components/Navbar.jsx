import React from 'react';
import { Link } from "react-router-dom";
// import { Container } from './styles';

function Navbar() {
    return <section data-bs-version="5.1" className="menu menu3 cid-tnXegTTyFI" once="menu" id="menu3-k">

        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <span className="navbar-logo">
                        <Link to="/">
                            <img src="assets/images/logo-real-energy-121x45.png" alt="Logo azul com nome realenergy serrilhado" />
                        </Link>
                    </span>

                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className="collapse navbar-collapse marginNav" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown " data-app-modern-menu="true">
                        <Link to='/#header1-f'>    <li className="nav-item"><a className="nav-link link text-primary display-4">Início</a></li></Link>
                        <Link to='/about#image2-10'>   <li className="nav-item"><a className="nav-link link text-primary display-4">Nossa história</a></li></Link>
                        <Link to='/etica#content6-1n'>  <li className="nav-item"><a className="nav-link link text-primary display-4" >Ética e Condutas</a></li></Link>
                        <Link to='/servicos#features5-s'> <li className="nav-item"><a className="nav-link link text-primary display-4">Serviços</a></li></Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link link dropdown-toggle text-primary display-4" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Contatos</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown-108">
                                <Link to='/contato#form5-1v'> <a className="dropdown-item text-primary display-4">Fale Conosco</a></Link>
                                <Link to='/denuncia#form5-1v'> <a className="dropdown-item text-primary display-4">Denúncias</a></Link>
                                <Link to="/trabalheconosco"><a className="dropdown-item text-primary display-4">Trabalhe Conosco</a></Link>
                                <Link to='/fornecedor'>  <a className="dropdown-item text-primary display-4">Pré-Cadastro de Fornecedor</a></Link>

                            </div></li></ul>


                   
                </div>
            </div>
        </nav>
    </section>
}

export default Navbar;