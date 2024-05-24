import React, { useState } from 'react';
import { db } from '../../../database/firebase';
import { collection, addDoc } from "firebase/firestore";
// import { Container } from './styles';

function DenunciaForm() {

    const [stateIdentification, setIdentificationState] = useState(true)
    const [relashionType, setRelashiontype] = useState(false)
    const [nome, setNome] = useState("Não identificado")
    const [email, setEmail] = useState("Não identificado")
    const [ocorrencia, setOcorrencia] = useState("")
    const [denunciadoType, setDenunciadoType] = useState("")
    const [denunciadoName, setDenunciadoName] = useState("Não identificado")
    const [menssage, setMenssage] = useState("")
    const [messageError, setError] = useState("")
    const [resultTrue, setResultTrue] = useState("")
    const [checkbox, setCheck] = useState(false)

    function handlerTimeout(value, state, count) {
        setTimeout(() => {
            state("")
        }, count)
    }


    async function handlerSendDenuncia(e) {


        e.preventDefault()
        if (stateIdentification) {
            if (nome === "" || nome === null) {
                setResultTrue(false)
                setError("O campo nome não pode ser vazio.")
                handlerTimeout(setNome, setError, 10000)
            } else if (email === "" || email === null) {
                setResultTrue(false)
                setError('O campo email não deve ser em branco ou fora do padrão email.')
                handlerTimeout(setEmail, setError, 10000)
            } else if (ocorrencia === "") {
                setResultTrue(false)
                setError('Você deve selecionar um tipo de ocorrência.')
                handlerTimeout(setOcorrencia, setError, 10000)
            } else if (denunciadoType === "") {
                setResultTrue(false)
                setError('Você deve selecionar o tipo de relação do denunciado.')
                handlerTimeout(denunciadoType, setError, 10000)
            } else if (denunciadoName === "") {
                setResultTrue(false)
                setError('Você deve informado o nome do denunciado.')
                handlerTimeout(denunciadoName, setError, 10000)
            }
            else if (menssage === "") {
                setResultTrue(false)
                setError('Voce precisa relatar o ocorrido.')
                handlerTimeout(setMenssage, setError, 10000)
            }
            else if (checkbox === false) {
                setResultTrue(false)
                setError("Você precisa concorda com os Termos e Políticas de Privacidade.");
                handlerTimeout(setCheck, setError, 5000)
            } else {
                setError("")


                await addDoc(collection(db, 'complaints'), {
                    nome,
                    email,
                    ocorrencia,
                    relacao: relashionType,
                    denunciadoNome: denunciadoName,
                    relato: menssage,
                    data: new Date().toLocaleDateString('pt-br')
                }).then((result) => {
                    setResultTrue('Sua denuncia foi enviada com sucesso!')
                    handlerTimeout(setNome, setResultTrue, 30000)
                })


            }
        } else {
            if (ocorrencia === "") {
                setResultTrue(false)
                setError('Você deve selecionar um tipo de ocorrência.')
                handlerTimeout(setOcorrencia, setError, 10000)
            } else if (denunciadoType === "") {
                setResultTrue(false)
                setError('Você deve selecionar o tipo de relação do denunciado.')
                handlerTimeout(denunciadoType, setError, 10000)
            } else if (denunciadoName === "" && denunciadoType === !"outros") {
                setResultTrue(false)
                setError('Você deve informado o nome do denunciado.')
                handlerTimeout(denunciadoName, setError, 10000)
            }
            else if (menssage === "") {
                setResultTrue(false)
                setError('Voce precisa relatar o ocorrido.')
                handlerTimeout(setMenssage, setError, 10000)
            }
            else if (checkbox === false) {
                setResultTrue(false)
                setError("Você precisa concorda com os Termos e Políticas de Privacidade.");
                handlerTimeout(setCheck, setError, 5000)
            } else {
                setError("")


                await addDoc(collection(db, 'complaints'), {
                    nome,
                    email,
                    ocorrencia,
                    relacao: relashionType,
                    denunciadoNome: denunciadoName,
                    relato: menssage,
                    data: new Date().toLocaleDateString('pt-br')
                }).then((result) => {
                    setResultTrue('Sua denuncia foi enviada com sucesso!')
                    handlerTimeout(setNome, setResultTrue, 30000)
                })



            }
        }


    }




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
                        <div class="dragArea row">
                            <div class="col-md col-sm-12 form-group mb-6" data-for="name" style={{ display: 'flex', flexDirection: 'row' }}>
                                <label class="form-check-label" for="flexSwitchCheckChecked" style={{ marginRight: 10 }}>Você deseja se identificar ?</label>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" checked={stateIdentification} id="flexSwitchCheckChecked" onChange={(e) => setIdentificationState(!stateIdentification)} />
                                </div>
                            </div>
                            {
                                stateIdentification ? <>
                                    <div class="col-md col-sm-12 form-group mb-3" data-for="name">

                                        <input type="text" name="name" placeholder="Nome" data-form-field="name" class="form-control" onChange={event => setNome(event.target.value)} />
                                    </div>
                                    <div class="col-md col-sm-12 form-group mb-3" data-for="email">
                                        <input type="email" name="email" placeholder="E-mail" data-form-field="email" class="form-control" onChange={event => setEmail(event.target.value)} />
                                    </div>
                                </> :
                                    null
                            }


                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" onChange={event => setOcorrencia(event.target.value)}>
                                    <option selected disabled>Tipo da ocorrência:</option>
                                    <option value="Assédio Sexual">Assédio Sexual</option>
                                    <option value="Assédio Moral">Assédio Moral</option>
                                    <option value="Agressão Física ou Discriminação">Agressão Física ou Discriminação</option>
                                    <option value="Corrupção com entes privados">Corrupção com entes privados</option>
                                    <option value="Corrupção com entes públicos">Corrupção com entes públicos</option>
                                    <option value="Destruição ou danos aos ativos">Destruição ou danos aos ativos</option>
                                    <option value="Desvio de comportamento">Desvio de comportamento</option>
                                    <option value="Fraude">Fraude</option>
                                    <option value="Favorecimento ou Conflito de interesses">Favorecimento ou Conflito de interesses</option>
                                    <option value="Favorecimento em atividades internas">Favorecimento em atividades internas</option>
                                    <option value="Promoção e Recrutamento">Promoção e Recrutamento</option>
                                    <option value="Não conformidade aos procedimentos e políticas internas">Não conformidade aos procedimentos e políticas internas</option>
                                    <option value="Roubo">Roubo</option>
                                    <option value="Furto ou Desvio de materiais">Furto ou Desvio de materiais</option>
                                    <option value="Relacionamento íntimo com subordinação direta">Relacionamento íntimo com subordinação direta</option>
                                    <option value="Pagamento ou recebimento impróprio">Pagamento ou recebimento impróprio  </option>
                                    <option value="Uso ou tráfico de substâncias proibidas">Uso ou tráfico de substâncias proibidas</option>
                                    <option value="Violação de leis não explícitas nas demais categorias">Violação de leis não explícitas nas demais categorias</option>
                                    <option value="Violação de leis ambientais">Violação de leis ambientais  </option>
                                    <option value="Violação de leis trabalhistas">Violação de leis trabalhistas  </option>
                                    <option value="Vazamento ou Uso indevido de informações">Vazamento ou Uso indevido de informações</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>
                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" onChange={event => setDenunciadoType(event.target.value)}>
                                    <option value="" selected disabled>Relação do denunciado com a empresa:</option>
                                    <option value="colaborador ativo">Coloborador Ativo</option>
                                    <option value="ex colaborador">Ex-Colaborador</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="fornecedor ou prestador">Fornecedor ou prestador de serviços</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>


                            {
                                denunciadoType != 'outros' || denunciadoType === "" ? <div class="col-12 form-group mb-3" data-for="url">
                                    <input type="text" placeholder={denunciadoType != "" ? `Nome do denunciado ${denunciadoType}` : 'Selecione o tipo de relação do denunciado com a empresa'} onChange={event => setDenunciadoName(event.target.value)} class="form-control" disabled={denunciadoType != "" ? false : true} />
                                </div> : null
                            }
                            <div class="col-12 form-group mb-3" >
                                <textarea name="textarea" class="form-control textArea" defaultValue="
                                    Descreva abaixo seu relato, com o máximo de informações possíveis.
                                    O quê (descrição da situação)
                                                                       
                                    Quem (nome das pessoas envolvidas, inclusive testemunhas caso existam)
                                 
                                    Quando (data em que aconteceu, acontece ou acontecerá a situação)
                                    
                                    Porquê (a causa ou motivo)

                                    Quanto (se houver informação de valores)" onChange={event => setMenssage(event.target.value)} >

                                </textarea>
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
                                <button type="submit" class="btn btn-primary display-4" onClick={handlerSendDenuncia} >Enviar Denúncia</button>
                            </div>
                        </div>
                        <span class="gdpr-block">
                            <label>
                                <span class="textGDPR display-7" style={{ color: '#a7a7a7' }}><input type="checkbox"
                                    name="gdpr" id="gdpr-form7-1k" checked={checkbox} onChange={() => setCheck(!checkbox)} />Eu concordo com os termos de serviços <a
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