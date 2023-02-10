import React, { useState, useEffect } from 'react';
import Cep from "react-simple-cep-mask";
import cep from 'cep-promise'
// import { Container } from './styles';

function FornecedorForm() {

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






    return <section data-bs-version="5.1" class="form7 cid-tvbrHAZ3tW" id="form7-1k">


        <div class="container-fluid">
            <div class="mbr-section-head">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-2 display-2">
                    <strong>FORNECEDOR, REALIZE O SEU PRÉ-CADASTRO</strong>
                </h3>

            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                    <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler mx-auto"
                        data-form-title="Form Name">
                        <p class="mbr-text mbr-fonts-style align-center mb-4 display-7">
                            O pré-cadastro de fornecedores permite que a REALENERGY conheça a área de atuação da sua
                            empresa, principais produtos e serviços prestados, e possa convida-lo a parcicipar de um
                            processo de concorrencial, de acordo com suas demandas.
                        </p>
                        <div class="row">
                            <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Obrigado por se
                                cadastrar!</div>
                            <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                Oops...! temos um problema.
                            </div>
                        </div>
                        <div class="dragArea row">

                            <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="cnpj">
                                <label for="cnpj">*Razão social</label>
                                <input type="text" name="cnpj" placeholder="Razão Social" data-form-field="cnpj"
                                    class="form-control" id="email-form7-1k" />
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="cnpj">
                                <label for="cnpj">*CNPJ</label>
                                <input type="text" name="cnpj" placeholder="cnpj" data-form-field="cnpj"
                                    class="form-control" id="email-form7-1k" />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Email">*Email</label>
                                <input type="text" name="Email" placeholder="Email" data-form-field="Email"
                                    class="form-control" id="phone-form7-1k" />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Email">*Área de Atuação</label>
                                <select type="select" name="Email" placeholder="Email" data-form-field="Email"
                                    class="form-control" id="phone-form7-1k">
                                    <option>Engenharia Civil</option>
                                    <option>Engenharia Mecânica</option>
                                    <option>Engenharia Elétrica</option>
                                    <option>Engenharia Automação</option>
                                    <option>Engenharia Eletronica</option>

                                </select>
                            </div>


                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Cep">*Cep</label>
                                <Cep
                                    value={cepresult}
                                    onChange={(cep) => setCep(cep)}
                                    className="form-control"
                                    placeholder="Digite seu cep"

                                />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Endereco">*Endereço</label>
                                <input type="text" name="endereco" placeholder="endereco" data-form-field="endereco"
                                    class="form-control" id="phone-form7-1k" value={endereco} disabled />
                            </div>
                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Endereco">*Bairro</label>
                                <input type="text" name="endereco" placeholder="bairro" data-form-field="endereco"
                                    class="form-control" id="phone-form7-1k" value={bairro} disabled />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="numero">*Numero</label>
                                <input type="text" name="numero" placeholder="numero" data-form-field="endereco"
                                    class="form-control" id="phone-form7-1k" />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="cidade">*Cidade</label>
                                <input type="text" name="cidade" placeholder="cidade" data-form-field="cidade"
                                    class="form-control" id="phone-form7-1k" value={cidade} disabled />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="complemento">Complemento</label>
                                <input type="text" name="complemento" placeholder="complemento"
                                    data-form-field="complemento" class="form-control" id="phone-form7-1k" />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="pais">Pais</label>
                                <input type="text" name="pais" placeholder="pais" data-form-field="pais"
                                    class="form-control" id="phone-form7-1k" value='Brazil' disabled />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <fieldset>
                                    <legend>Categoria de Fornecimento 1° Nivel</legend>

                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="huey" name="drone" value="huey" />
                                        <label class="form-check-label" for="huey">Serviços</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="dewey" name="drone" value="dewey" />
                                        <label class="form-check-label" for="dewey">Materiais</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="radio" id="louie" class="form-check-input" name="drone" value="louie" />
                                        <label class="form-check-label" for="louie">Materiais e Serviços</label>
                                    </div>
                                </fieldset>
                                <h4>Categoria de Fonecimento 2° Nivel</h4>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="auditCons" />
                                    <label class="form-check-label" for="auditCons">
                                        Auditoria / Consultorias
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="beneficios" />
                                    <label class="form-check-label" for="beneficios">
                                        Benefícios
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="epis" />
                                    <label class="form-check-label" for="epis">
                                        EPI / Uniformes
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="facilities" />
                                    <label class="form-check-label" for="facilities">
                                        Facilities
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="eletronics" />
                                    <label class="form-check-label" for="eletronics">
                                        Informática / Eletronicos
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="infra" />
                                    <label class="form-check-label" for="infra">
                                        Infraestutura - Instalações
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="materialGrafico" />
                                    <label class="form-check-label" for="materialGrafico">
                                        Mat. Gráfico
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="matHigienie" />
                                    <label class="form-check-label" for="matHigienie">
                                        Material de Escritório / Higiene / Limpeza
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="matEletrico" />
                                    <label class="form-check-label" for="matEletrico">
                                        Material Elétrico
                                    </label>
                                </div>


                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="obrasemeioambiente" />
                                    <label class="form-check-label" for="obrasemeioambiente">
                                        Obras - Conservação Especial / Meio Ambiente
                                    </label>
                                </div>



                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="obrassinalizacao" />
                                    <label class="form-check-label" for="obrassinalizacao">
                                        Obras - Sinalização / Elementos de Segurança
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="equipamentosmetro" />
                                    <label class="form-check-label" for="equipamentosmetro">
                                        Peças / Equip Metrô
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="productsasfalticos" />
                                    <label class="form-check-label" for="productsasfalticos">
                                        Produtos Asfalticos - Material
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="servManutencao" />
                                    <label class="form-check-label" for="servManutencao">
                                        Serviços de Manutenção
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="servicosOperacoes" />
                                    <label class="form-check-label" for="servicosOperacoes">
                                        Serviços de Operações
                                    </label>
                                </div>


                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="tecInfra" />
                                    <label class="form-check-label" for="tecInfra">
                                        Tecnologia - Automação / Eletrica/ Infraestutura / Sistemas
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="tintasPlacas" />
                                    <label class="form-check-label" for="tintasPlacas">
                                        Tintas Viárias/Placas/Tachas
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="transporte" />
                                    <label class="form-check-label" for="transporte">
                                        Transporte de Passageiros
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="transporteVal" />
                                    <label class="form-check-label" for="transporteVal">
                                        Transporte de Valores
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="outhers" />
                                    <label class="form-check-label" for="outhers">
                                        Outros
                                    </label>
                                </div>


                            </div>





                            <div class="col-auto mbr-section-btn align-center">
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

export default FornecedorForm;