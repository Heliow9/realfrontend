import React, { useState } from 'react';

// import { Container } from './styles';

function DenunciaForm() {

    const [stateIdentification, setIdentificationState] = useState(false)


    return <section data-bs-version="5.1" class="form5 cid-twHiEKrqNg" id="form5-1v">


        <div class="container">
            <div class="mbr-section-head">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Canal de Denuncias</strong>
                </h3>

            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                    <form class="mbr-form form-with-styler" data-form-title="Form Name">
                        <div class="row">
                            <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                            <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                Oops...! some problem!
                            </div>
                        </div>
                        <div class="dragArea row">
                            <div class="col-md col-sm-12 form-group mb-6" data-for="name">
                                <div class="form-check form-switch ">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Deseja se identificar?</label>
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={(e) => setIdentificationState(!stateIdentification)} />
                                </div>
                            </div>
                            {
                                stateIdentification ? <div class="col-md col-sm-12 form-group mb-3" data-for="name">

                                    <input type="text" name="name" placeholder="Nome" data-form-field="name" class="form-control" value="" id="name-form5-1v" />
                                </div> :
                                    null
                            }
                            <div class="col-md col-sm-12 form-group mb-3" data-for="email">
                                <input type="email" name="email" placeholder="E-mail" data-form-field="email" class="form-control" value="" id="email-form5-1v" />
                            </div>
                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" aria-label="Default select example">
                                    <option selected disabled>Motivo</option>
                                    <option value="1">Informações</option>
                                    <option value="2">Reclamações</option>
                                    <option value="3">Elogios</option>
                                </select>

                            </div>
                            <div class="col-12 form-group mb-3" data-for="url">
                                <input type="url" name="url" placeholder="exemplo@mail.com.br" data-form-field="url" class="form-control" value="" id="url-form5-1v" />
                            </div>
                            <div class="col-12 form-group mb-3" data-for="textarea">
                                <textarea name="textarea" placeholder="Mensagem" data-form-field="textarea" class="form-control" id="textarea-form5-1v"></textarea>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                <button type="submit" class="btn btn-primary display-4">Enviar</button>
                            </div>
                        </div>
                        <span class="gdpr-block">
                            <label>
                                <span class="textGDPR display-7" style={{ color: '#a7a7a7' }}><input type="checkbox"
                                    name="gdpr" id="gdpr-form7-1k" required="" />Eu concordo com os termos de serviços <a
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

export default DenunciaForm;