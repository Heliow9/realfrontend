import React, { useState } from 'react';
import axios from 'axios'

// import { Container } from './styles';

function ContactForm() {


    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [motivo, setMotivo] = useState("")
    const [menssage, setMessage] = useState("")
    const [messageError, setError] = useState("")
    const [resultTrue, setResultTrue] = useState("")
    const [checkbox, setCheck] = useState(false)
    const inputName = document.getElementById('formName')
    const checkPolicy = document.getElementById('checkPolicy')



    function handlerTimeout(value, state, count) {
        setTimeout(() => {
            state("")
        }, count)
    }


    async function handlerSendContact(e) {
        e.preventDefault()
        if (nome === "" || nome === null) {
            setResultTrue(false)
            setError("O campo nome não pode ser vazio.")
            handlerTimeout(setNome, setError, 5000)
        } else if (email === "" || email === null) {
            setResultTrue(false)
            setError('O campo email não deve ser em branco ou fora do padrão email.')
            handlerTimeout(setNome, setError, 5000)
        } else if (motivo === "" || motivo === null || motivo === 'selected') {
            setResultTrue(false)
            setError("Você deve selecionar o motivo do contato.")
            handlerTimeout(setNome, setError, 5000)
        } else if (menssage === "" || menssage === null) {
            setResultTrue(false)
            setError("O campo de mensagem não pode ser em branco.");
            handlerTimeout(setNome, setError, 5000)
        } else if (checkbox === false) {
            setResultTrue(false)
            setError("Você precisa concorda com os Termos e Políticas de Privacidade.");
            handlerTimeout(setNome, setError, 5000)
        }

        else {
            setError("")


            await axios.post("http://localhost:21055/sendmailfale", {
                nome,
                email,
                motivo,
                menssage
            }).then((result) => {
                setResultTrue(result)
                handlerTimeout(setNome, setResultTrue, 30000)
            }).catch((err) => {
                console.log(err)
            })


        }
    }


    return <section data-bs-version="5.1" class="form5 cid-twHiEKrqNg" id="form5-1v">


        <div class="container">
            <div class="mbr-section-head">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Fale Conosco</strong>
                </h3>

            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                    <form >
                        <div class="row">
                            <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                            <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                Oops...! some problem!
                            </div>
                        </div>
                        <div class="dragArea row">
                            <div class="col-md col-sm-12 form-group mb-3" data-for="name">
                                <input type="text" name="name" placeholder="Nome" class="form-control" id="formName" required onChange={event => setNome(event.target.value)} />
                            </div>
                            <div class="col-md col-sm-12 form-group mb-3" data-for="email">
                                <input type="email" name="email" placeholder="Examplo@realenergy.com.br" class="form-control" required onChange={event => setEmail(event.target.value)} />
                            </div>
                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" aria-label="Default select example" onChange={event => setMotivo(event.target.value)}>
                                    <option value="selected" selected disabled>Motivo</option>
                                    <option value="Informações">Informações</option>
                                    <option value="Reclamações">Reclamações</option>
                                    <option value="Elogios">Elogios</option>
                                </select>

                            </div>

                            <div class="col-12 form-group mb-3" data-for="textarea">
                                <textarea name="textarea" placeholder="Mensagem" data-form-field="textarea" class="form-control" onChange={event => setMessage(event.target.value)} id="textarea-form5-1v"></textarea>
                            </div>
                            {
                                messageError ? <div class="alert alert-danger" role="alert">
                                    {messageError}
                                </div> : null
                            }
                            {
                                resultTrue ? <div class="alert alert-success" role="alert">
                                    Mensagem enviada com sucesso!
                                </div> : null
                            }
                            <div class="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                <button type="submit" class="btn btn-primary display-4" onClick={handlerSendContact}>Enviar</button>
                            </div>

                        </div>

                        <span class="gdpr-block">
                            <label>
                                <span class="textGDPR display-7" style={{ color: '#a7a7a7' }}><input type="checkbox"
                                    name="gdpr" checked={checkbox} onChange={() => setCheck(!checkbox)} required id='checkPolicy' />Eu concordo com os termos de serviços <a
                                        style={{ color: '#149dcc', }} href="terms.html">Termos e serviços</a> e com a  <a style={{ color: '#149cc', textDecoration: 'none' }}
                                            href="policy.html">Política de Privacidade</a>.</span>
                            </label>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default ContactForm;