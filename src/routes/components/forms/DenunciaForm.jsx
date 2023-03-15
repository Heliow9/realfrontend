import React, { useState } from 'react';

// import { Container } from './styles';

function DenunciaForm() {

    const [stateIdentification, setIdentificationState] = useState(false)
    const [relashionType, setRelashiontype] = useState(false)
    const [denunciado, setDenunciado] = useState('colaborador ativo')

    return <section data-bs-version="5.1" class="form5 cid-twHiEKrqNg" id="form5-1v">


        <div class="container">
            <div class="mbr-section-head">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Canal de Denúncias</strong>
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
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={(e) => setIdentificationState(!stateIdentification)} />
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Você deseja se identificar ?</label>
                                </div>
                            </div>
                            {
                                stateIdentification ? <>
                                    <div class="col-md col-sm-12 form-group mb-3" data-for="name">

                                        <input type="text" name="name" placeholder="Nome" data-form-field="name" class="form-control" value="" id="name-form5-1v" />
                                    </div>
                                    <div class="col-md col-sm-12 form-group mb-3" data-for="email">
                                        <input type="email" name="email" placeholder="E-mail" data-form-field="email" class="form-control" value="" id="email-form5-1v" />
                                    </div>
                                </> :
                                    null
                            }


                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" aria-label="Default select example">
                                    <option selected disabled>Tipo da ocorrência:</option>
                                    <option value="1">Assédio Sexual</option>
                                    <option value="2">Assédio Moral</option>
                                    <option value="3">Agressão Física ou Discriminação</option>
                                    <option value="1">Corrupção com entes privados</option>
                                    <option value="2">Corrupção com entes públicos  </option>
                                    <option value="3">Destruição ou danos aos ativos</option>
                                    <option value="1">Desvio de comportamento</option>
                                    <option value="2">Fraude</option>
                                    <option value="3">Favorecimento ou Conflito de interesses</option>
                                    <option value="1">Favorecimento em atividades internas</option>
                                    <option value="2">Promoção e Recrutamento</option>
                                    <option value="3">Não conformidade aos procedimentos e políticas internas</option>
                                    <option value="1">Roubo</option>
                                    <option value="2">Furto ou Desvio de materiais</option>
                                    <option value="3">Relacionamento íntimo com subordinação direta.</option>
                                    <option value="1">Pagamento ou recebimento impróprio  </option>
                                    <option value="2">Uso ou tráfico de substâncias proibidas</option>
                                    <option value="3">Violação de leis não explícitas nas demais categorias</option>
                                    <option value="1">Violação de leis ambientais  </option>
                                    <option value="2">Violação de leis trabalhistas  </option>
                                    <option value="3">Vazamento ou Uso indevido de informações</option>
                                    <option value="3">Outros</option>
                                </select>
                            </div>
                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" aria-label="Default select example" onChange={event => setDenunciado(event.target.value)}>
                                    <option selected disabled>Relação do denunciado com a empresa:</option>
                                    <option value="colaborador ativo">Coloborador Ativo</option>
                                    <option value="ex colaborador">Ex-Colaborador</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="fornecedor ou prestador">Fornecedor ou prestador de serviços</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>


                            <div class="col-12 form-group mb-3" data-for="url">
                                <input type="url" name="url" placeholder={`nome do ${denunciado}`} data-form-field="url" class="form-control" value="" id="url-form5-1v" />
                            </div>
                            <div class="col-12 form-group mb-3" >
                                <textarea name="textarea" class="form-control textArea">

                                    Descreva abaixo seu relato, com o máximo de informações possíveis
                                    O quê (descrição da situação)
                                    "\n"
                                    Quem (nome das pessoas envolvidas, inclusive testemunhas caso existam)
                                    "\n"
                                    Quando (data em que aconteceu, acontece ou acontecerá a situação)
                                    "\n"
                                    Porquê (a causa ou motivo)

                                    Quanto (se houver informação de valores)
                                </textarea>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                <button type="submit" class="btn btn-primary display-4">Enviar Denúncia</button>
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