import React, { useState, useEffect } from 'react';
import Cep from "react-simple-cep-mask";
import cep from 'cep-promise'
// import { Container } from './styles';

function FornecedorForm() {

    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [atuationArea, setAtuationArea] = useState("Engenharia Civil");
    const [cepresult, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [residenceNunber, setResidenceNuber] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereComplement, setEnderecoComplement] = useState("");
    const [coutry, setCoutry] = useState("");


    //selected input Nivel 1
    const [category, setCategory] = useState("");


    // checkbox Nivel 2
    const [auditoriaCheck, setAuditoriaCheck] = useState(false);
    const [beneficiosCheck, setBeneficiosCheck] = useState(false);
    const [epiCheck, setEpiCheck] = useState(false);
    const [facilitiesCheck, setFacilitiesCheck] = useState(false);
    const [informaticaCheck, setInformaticaCheck] = useState(false);
    const [infraestruturaCheck, setInfraEstruturaCheck] = useState(false);
    const [materialGraficoCheck, setMaterialGraficoCheck] = useState(false);
    const [materialEscritorioCheck, setMaterialEscritorioCheck] = useState(false);
    const [materialEletricoCheck, setMateerialEletricoCheck] = useState(false);
    const [ObrasConversacaoCheck, setObrasConservacaoCheck] = useState(false);
    const [ObrasSinalizacaoCheck, setObrasSinalizacao] = useState(false);
    const [pecasCheck, setPecasCheck] = useState(false);
    const [produtosAsfalticosCheck, setProdutosAsfalticosCheck] = useState(false);
    const [servicosManuntecaoCheck, setServicosManutencaoCheck] = useState(false);
    const [servicosOperacoesCheck, setServicosOperacoesCheck] = useState(false);
    const [TecnologiaAutomacaoCheck, setTecnologiaAutomacao] = useState(false);
    const [tintasCheck, setTintasCheck] = useState(false);
    const [TransportePassageirosCheck, setTranspoterCheck] = useState(false);
    const [TransporteValoresCheck, setTransporterValoresCheck] = useState(false);
    const [outroCheck, setOutrosCheck] = useState(false);
    // results
    const [messageError, setError] = useState("")
    const [resultTrue, setResultTrue] = useState("")


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


    function handlerSendForm(e) {
        e.preventDefault()
        if (razaoSocial === "") {
            setError('Por favor informe a razão social.')
        } else if (cnpj === "") {
            setError('Cnpj invalido verifique!')
            console.log(messageError)
        } else if (email === "") {
            setError('Email invalido ou em verifique!')
        } else if (cepresult === ""){
            setError('Cep invalido ou em branco verifique!')
        }else if (residenceNunber ===""){
            setError('É necessário preencher o numero do endereço.')
        }else if(category ===""){
        setError("É necessário selecionar uma categória de nivel 1")
        }else if(auditoriaCheck || beneficiosCheck === false){
            setError('Não passou')
            
        }else{
            setError('entrou aqui')
        }

    }




    return <section data-bs-version="5.1" class="form7 cid-tvbrHAZ3tW" id="form7-1k">


        <div class="container-fluid">
            <div class="mbr-section-head">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-2 display-2">
                    <h3>FORNECEDOR, REALIZE O SEU PRÉ-CADASTRO</h3>
                </h3>

            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                    <form class="mbr-form form-with-styler mx-auto">
                        <p class="mbr-text mbr-fonts-style align-center mb-4 display-7">
                            O pré-cadastro de fornecedores permite que a REAL ENERGY conheça a área de atuação da sua
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
                                <input required type="text" name="cnpj" placeholder="Razão Social" data-form-field="cnpj"
                                    class="form-control" id="email-form7-1k" onChange={event => setRazaoSocial(event.target.value)} />
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="cnpj">
                                <label for="cnpj">*CNPJ</label>
                                <input required type="text" name="cnpj" class="form-control" placeholder="cnpj" onChange={event => setCnpj(event.target.value)} />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Email">*Email</label>
                                <input required type="text" name="Email" placeholder="Email" data-form-field="Email"
                                    class="form-control" id="phone-form7-1k" onChange={event => setEmail(event.target.value)} />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Email">*Área de Atuação</label>
                                <select type="select" name="Email" placeholder="Email" data-form-field="Email"
                                    class="form-control" id="phone-form7-1k" onChange={event => setAtuationArea(event.target.value)}>
                                    <option value='Engenharia Civil'>Engenharia Civil</option>
                                    <option value='Engenharia Mecânica'>Engenharia Mecânica</option>
                                    <option value='Engenharia Elétrica'>Engenharia Elétrica</option>
                                    <option value='Engenharia Automação'>Engenharia Automação</option>
                                    <option value='Engenharia Eletronica'>Engenharia Eletronica</option>
                                    <option value='Outros'>Outros</option>

                                </select>
                            </div>


                            <div data-for="cep" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
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
                                <input required type="text" name="endereco" placeholder="endereco" data-form-field="endereco"
                                    class="form-control" id="phone-form7-1k" value={endereco} disabled />
                            </div>
                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="Endereco">*Bairro</label>
                                <input required type="text" name="endereco" placeholder="bairro" data-form-field="endereco"
                                    class="form-control" id="phone-form7-1k" value={bairro} disabled />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="numero">*Numero</label>
                                <input required type="text" name="numero" placeholder="numero" data-form-field="endereco"
                                    class="form-control" id="phone-form7-1k" onChange={event=>setResidenceNuber(event.target.value)} />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="cidade">*Cidade</label>
                                <input required type="text" name="cidade" placeholder="cidade" data-form-field="cidade"
                                    class="form-control" id="phone-form7-1k" value={cidade} disabled />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="complemento">Complemento</label>
                                <input required type="text" name="complemento" placeholder="complemento"
                                    data-form-field="complemento" class="form-control" id="phone-form7-1k" onChange={event => setEnderecoComplement(event.target.value)} />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <label for="pais">Pais</label>
                                <input required type="text" name="pais" placeholder="pais" data-form-field="pais"
                                    class="form-control" id="phone-form7-1k" value='Brazil' disabled />
                            </div>

                            <div data-for="phone" class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                <fieldset onChange={event => setCategory(event.target.value)} >
                                    <legend>Categoria de Fornecimento 1° Nivel</legend>

                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="Serviços" name="drone" value="Serviços" />
                                        <label class="form-check-label" for="Serviços">Serviços</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="Materiais" name="drone" value="Materiais" />
                                        <label class="form-check-label" for="Materiais">Materiais</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="radio" id="Materiais e Serviços" class="form-check-input" name="drone" value="Materiais e Serviços" />
                                        <label class="form-check-label" for="Materiais e Serviços">Materiais e Serviços</label>
                                    </div>
                                </fieldset>
                                <h4>Categoria de Fonecimento 2° Nivel</h4>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="auditCons" checked={auditoriaCheck} onChange={() => setAuditoriaCheck(!auditoriaCheck)} />
                                    <label class="form-check-label" for="auditCons">
                                        Auditoria / Consultorias
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="beneficios" checked={beneficiosCheck} onChange={() => setBeneficiosCheck(!beneficiosCheck)} />
                                    <label class="form-check-label" for="beneficios">
                                        Benefícios
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="epis" checked={epiCheck} onChange={() => setEpiCheck(!epiCheck)} />
                                    <label class="form-check-label" for="epis">
                                        EPI / Uniformes
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="facilities" checked={facilitiesCheck} onChange={() => setFacilitiesCheck(!facilitiesCheck)} />
                                    <label class="form-check-label" for="facilities">
                                        Facilities
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="eletronics" checked={informaticaCheck} onChange={() => setInformaticaCheck(!informaticaCheck)} />
                                    <label class="form-check-label" for="eletronics">
                                        Informática / Eletronicos
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="infra" checked={infraestruturaCheck} onChange={() => setInfraEstruturaCheck(!infraestruturaCheck)} />
                                    <label class="form-check-label" for="infra">
                                        Infraestutura - Instalações
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="materialGrafico" checked={materialGraficoCheck} onChange={() => setMaterialGraficoCheck(!materialGraficoCheck)} />
                                    <label class="form-check-label" for="materialGrafico">
                                        Mat. Gráfico
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="matHigienie" checked={materialEscritorioCheck} onChange={() => setMaterialEscritorioCheck(!materialEscritorioCheck)} />
                                    <label class="form-check-label" for="matHigienie">
                                        Material de Escritório / Higiene / Limpeza
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="matEletrico" checked={materialEletricoCheck} onChange={() => setMateerialEletricoCheck(!materialEletricoCheck)} />
                                    <label class="form-check-label" for="matEletrico">
                                        Material Elétrico
                                    </label>
                                </div>


                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="obrasemeioambiente" checked={ObrasConversacaoCheck} onChange={() => setObrasConservacaoCheck(!ObrasConversacaoCheck)} />
                                    <label class="form-check-label" for="obrasemeioambiente">
                                        Obras - Conservação Especial / Meio Ambiente
                                    </label>
                                </div>



                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="obrassinalizacao" checked={ObrasSinalizacaoCheck} onChange={() => setObrasSinalizacao(!ObrasSinalizacaoCheck)} />
                                    <label class="form-check-label" for="obrassinalizacao">
                                        Obras - Sinalização / Elementos de Segurança
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="equipamentosmetro" checked={pecasCheck} onChange={() => setPecasCheck(!pecasCheck)} />
                                    <label class="form-check-label" for="equipamentosmetro">
                                        Peças / Equip Metrô
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="productsasfalticos" checked={produtosAsfalticosCheck} onChange={() => setProdutosAsfalticosCheck(!produtosAsfalticosCheck)} />
                                    <label class="form-check-label" for="productsasfalticos">
                                        Produtos Asfalticos - Material
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="servManutencao" checked={servicosManuntecaoCheck} onChange={() => setServicosManutencaoCheck(!servicosManuntecaoCheck)} />
                                    <label class="form-check-label" for="servManutencao">
                                        Serviços de Manutenção
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="servicosOperacoes" checked={servicosOperacoesCheck} onChange={() => setServicosOperacoesCheck(!servicosOperacoesCheck)} />
                                    <label class="form-check-label" for="servicosOperacoes">
                                        Serviços de Operações
                                    </label>
                                </div>


                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="tecInfra" checked={TecnologiaAutomacaoCheck} onChange={() => setTecnologiaAutomacao(!TecnologiaAutomacaoCheck)} />
                                    <label class="form-check-label" for="tecInfra">
                                        Tecnologia - Automação / Eletrica/ Infraestutura / Sistemas
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="tintasPlacas" checked={tintasCheck} onChange={() => setTintasCheck(!tintasCheck)} />
                                    <label class="form-check-label" for="tintasPlacas">
                                        Tintas Viárias/Placas/Tachas
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="transporte" checked={TransportePassageirosCheck} onChange={() => setTranspoterCheck(!TransportePassageirosCheck)} />
                                    <label class="form-check-label" for="transporte">
                                        Transporte de Passageiros
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="transporteVal" checked={TransporteValoresCheck} onChange={() => setTransporterValoresCheck(!TransporteValoresCheck)} />
                                    <label class="form-check-label" for="transporteVal">
                                        Transporte de Valores
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="outhers" checked={outroCheck} onChange={() => setOutrosCheck(!outroCheck)} />
                                    <label class="form-check-label" for="outhers">
                                        Outros
                                    </label>
                                </div>


                            </div>





                            <div class="col-auto mbr-section-btn align-center">
                                <button type="submit" class="btn btn-primary display-4" onClick={handlerSendForm}>Enviar</button>
                            </div>
                        </div>
                        <span class="gdpr-block">
                            <label>
                                <span class="textGDPR display-7" style={{ color: '#a7a7a7' }}><input type="checkbox"
                                    name="gdpr" id="gdpr-form7-1k" required />Eu concordo com os termos de serviços <a
                                        style={{ color: '#149dcc', }} href="terms.html">Termos e serviços</a> e com a  <a style={{ color: '#149cc', textDecoration: 'none' }}
                                            href="policy.html">Política de Privacidade</a>.</span>
                            </label>
                        </span>
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
                    </form>

                </div>
            </div>
        </div>
    </section>
}

export default FornecedorForm;