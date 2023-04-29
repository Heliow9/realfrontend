import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import '../../components/css/login.css'
import LoginLogo from '../../assets/images/loginLogo.jpg'
import Footer from '../Footer'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../database/firebase';
import { collection, addDoc } from "firebase/firestore";

// import { Container } from './styles';

function Register() {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()




    async function handlerRegistration(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials)
                addDoc(collection(db, 'users'), {
                    id: userCredentials.user.uid
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    const [checkbox, setCheck] = useState(false)

    return (
        <>
            <Navbar />
            <section data-bs-version="5.1" class="form3 cid-tCEP79I6U7" id="form3-25">
                <br /><br /><br /><br /><br /><br />
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 col-12">
                            <div class="image-wrapper">
                                <img class="w-100" src={LoginLogo} alt="Mobirise Website Builder" />
                            </div>
                        </div>
                        <div class="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
                            <form class="mbr-form form-with-styler" ><input type="hidden" name="email" data-form-email="true" value="Pxq+ZIsEivGVbvHYBRGVqIiFqDIXSxQgABfaFoL3G9QE5N9mdgrQsy7yhjCWRFmd369g0tn5K+6helftQkW5cVQBQN5Mn7T3iTcTozKZa8XaXdbNCNeO1eERyrmB1EPI" />
                                <div class="row">
                                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                        Oops...! some problem!
                                    </div>
                                </div>
                                <div class="dragArea row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h1 class="mbr-section-title mb-4 display-2"><strong>Cadastre-se</strong></h1>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <p class="mbr-text mbr-fonts-style mb-4 display-7">Faça o cadastro do seu curriculo por aqui mesmo!</p>
                                    </div>
                                    <div data-for="name" class="col-lg-12 col-md col-sm-12 form-group mb-3">
                                        <input type="text" name="name" placeholder="example@email.com.br" data-form-field="name" class="form-control" onChange={event => (setEmail(event.target.value))} />
                                    </div>
                                    <div class="col-lg-12 col-md col-sm-12 form-group mb-3" data-for="email" >
                                        <input type="email" name="email" placeholder="**********" data-form-field="email" class="form-control" onChange={event => (setPassword(event.target.value))} />
                                    </div>
                                    <div class="col-md-auto col-4 mbr-section-btn"><button type="submit" class="btn btn-white display-4" onClick={handlerRegistration}>Registrar</button></div>

                                    <Link to='/login'><div class="col-md-auto col-4 mbr-section-btn"><button type="submit" class="btn btn-black display-4">Entrar</button></div></Link>
                                </div>
                                <span class="gdpr-block">
                                    <label>
                                        <span class="textGDPR display-7" style={{ color: 'white' }}><input type="checkbox"
                                            name="gdpr" id="gdpr-form7-1k" checked={checkbox} onChange={() => setCheck(!checkbox)} />Eu concordo com os termos de serviços <a
                                                style={{ color: '#149dcc', }} href="terms.html">Termos e serviços</a> e com a  <a style={{ color: '#149cc', textDecoration: 'none' }}
                                                    href="policy.html">Política de Privacidade</a>.</span>
                                    </label>
                                </span></form>
                        </div>
                        <div class="offset-lg-1"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register;