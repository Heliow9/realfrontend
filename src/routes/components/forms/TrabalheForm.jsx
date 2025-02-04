import React, { useState } from 'react';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { storage, db } from '../../../database/firebase'
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import { NumericFormat } from 'react-number-format';
import { addDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';
// import { Container } from './styles';

function TrabalheForm() {
    const [curriculoData, setCurriculoData] = useState()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [nivel, setNivel] = useState("")
    const [cpf, setCpf] = useState("")
    const [telephone, setTelephone] = useState("")
    const [nasc, setNasc] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")

    const [pretencao, setPretention] = useState("")
    const [file, setFile] = useState("")
    const [observation, setObservation] = useState("")
    const [progress, setProgress] = useState(0)
    const [messageError, setError] = useState("")
    const [resultTrue, setResultTrue] = useState("")
    const [mask, setMask] = useState("");
    const [checked, setCheked] = useState(false);
    const [isPCD, setIsPCD] = useState(false);
    const [isAprendiz, setIsAprendiz] = useState(false);
    const [tipoDeficiencia, setTipoDeficiencia] = useState("");
    const [detalhesDeficiencia, setDetalhesDeficiencia] = useState("");
    const [necessidadesEspecificas, setNecessidadesEspecificas] = useState("");
    const [funcao, setFuncao] = useState("")
    function handlerTimeout(value, state, count) {
        setTimeout(() => {
            state("")
        }, count)
    }


    console.log(cpf)
    async function HandlerSendFormTrabalhe(e) {
        e.preventDefault()
        if (nome === "") {
            setError('Por gentileza digite seu nome.')
            handlerTimeout(nome, setError, 5000)
        } else if (email === "") {
            setError('Por gentileza digite um email válido.')
            handlerTimeout(email, setError, 5000)
        } else if (nivel === "") {
            setError('Selecione um nivel de ensino válido!')
            handlerTimeout(nivel, setError, 5000)
        } else if (cpf.length < 11) {
            setError('O CPF precisa conter 11 digitos.')
            handlerTimeout(cpf, setError, 5000)
        } else if (telephone === "" || telephone.length < 11) {
            setError('numero do telefone inválido ou incorreto.')
            handlerTimeout(email, setError, 5000)
        } else if (nasc == "") {
            setError('Selecione a data de nascimento')
            handlerTimeout(nasc, setError, 5000)
        } 
        else if (funcao === "") {
            setError('Selecione um função')
            handlerTimeout(funcao, setError, 5000)
        }
        else if (estado === "") {
            setError('Selecione um estado')
            handlerTimeout(estado, setError, 5000)
        }
        else if (cidade === "") {
            setError('Selecione um estado')
            handlerTimeout(cidade, setError, 5000)
        }
        
        else if (file === "") {
            setError('Selecione um arquivo no formato PDF')
            handlerTimeout(estado, setError, 3000)
        } else if (checked == false) {
            setError('Você precisa concorda com os termos de uso!')
            handlerTimeout(estado, setError, 3000)
        } else {

            await getDocs(collection(db, 'curriculum')).then((snap) => {
                let data = [];
                snap.docs.forEach((doc) => {
                    data.push(doc.data())
                })
                setCurriculoData(data)
                console.log(data)

            }).catch((err) => { console.log(err) });
            // verifica se possui curriculo enviado com o mesmo cpf no mesmo dia
            let searchQuery = curriculoData.filter(curriculo => curriculo.cpf.includes(cpf))
            console.log(searchQuery)

            // caso haja ele informa que o curriculo ja se encontra cadastrado
            if (searchQuery.length > 0) {
                const lastEntryDate = new Date(
                    searchQuery[searchQuery.length - 1].data.split('/').reverse().join('-')
                ); // Converte 'DD/MM/AAAA' para um objeto Date.
                const currentDate = new Date();

                // Calcula a diferença em milissegundos e converte para dias.
                const differenceInDays = Math.floor((currentDate - lastEntryDate) / (1000 * 60 * 60 * 24));

                if (differenceInDays <= 30) {
                    setResultTrue('');
                    setError('O Currículo informado já foi enviado nos últimos 30 dias. Aguarde para reenviar.');
                    handlerTimeout(estado, setError, 10000);
                    setProgress(0);
                }
            } else {
                const storageRef = ref(storage, `vitaes/${file.name}`)
                const uploadTask = uploadBytesResumable(storageRef, file)
                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        setProgress(progress)
                    },
                    error => {
                        console.log(error)
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(url => {
                            // encaminha os demais dados do envio do curriculo para o firestore
                            addDoc(collection(db, 'curriculum'), {
                                nome,
                                email,
                                nivel,
                                cpf,
                                telephone,
                                nasc,
                                estado,
                                cidade,
                                pretencao,
                                observation,
                                urlCurriculum: url,
                                data: new Date().toLocaleDateString('pt-br'),
                                isPCD,
                                isAprendiz,
                                ...(isPCD && {
                                    tipoDeficiencia,
                                    detalhesDeficiencia,
                                    necessidadesEspecificas,
                                }),
                                funcao

                            })
                            setResultTrue('Curriculo enviado com sucesso!')
                            handlerTimeout(estado, resultTrue, 5000)
                        })
                    }
                )
            }
        }



    }

    return <section data-bs-version="5.1" class="form5 cid-twHiEKrqNg" id="form5-1v">


        <div class="container">
            <div class="mbr-section-head">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Trabalhe Conosco</strong>
                </h3>


            </div>
            <div class="row justify-content-center mt-4">

                <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                    <p>Faça parte do nosso time e ajude a REAL ENERGY a ser cada vez melhor! Para se candidatar a uma vaga, preencha o formulário abaixo.</p>
                    <form class="mbr-form form-with-styler">

                        <div class="dragArea row">

                            <div class="col-md col-sm-12 form-group mb-3" data-for="name">
                                <input type="text" name="name" placeholder="Nome Completo" class="form-control" onChange={event => setNome(event.target.value)} />
                            </div>


                            <div class="col-md col-sm-12 form-group mb-3" data-for="email">
                                <input type="email" name="email" placeholder="E-mail" class="form-control" onChange={event => setEmail(event.target.value)} />
                            </div>

                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" onChange={event => setNivel(event.target.value)} >
                                    <option selected disabled value="">Selecione o nivel de experiência</option>
                                    <option value="Nivel Fundamental">Ensino Fundamental</option>
                                    <option value="Nivel Médio">Ensino Médio</option>
                                    <option value="Nivel Técnico">Nivel Técnico</option>
                                    <option value="Nivel Superior">Ensino Superior</option>

                                </select>

                            </div>
                            <div class="col-sm-12 form-group mb-3 labelcontrol"  >
                                <label htmlFor="" className='form-label' >CPF: </label>
                                <CpfCnpj value={cpf} onChange={(event, type) => { setCpf(event.target.value); setMask(type === "CPF") }} className="form-control" maxLength="14" />

                            </div>
                            <div class="col-sm-12 form-group mb-3 labelcontrol" >
                                <label htmlFor="" className='form-label' >Telefone pra contato (Preferecia Whatsapp): </label>
                                <TelefoneBrasileiroInput value={telephone} onChange={event => setTelephone(event.target.value)} temDDD separaNono className="form-control" />
                                {/* <input type="tel" name="telephone" id="" className='form-control' placeholder='(81)xxxx-xxxx' onChange={event => setTelephone(event.target.value)} /> */}
                            </div>
                            <div class="col-sm-12 form-group mb-3 labelcontrol" data-for="url">
                                <label htmlFor="" className='form-label' >Pretenção salarial: </label>
                                <NumericFormat prefix='R$' className='form-control' onChange={event => setPretention(event.target.value)} />
                                {/* <input type="text" name="text" id="" className='form-control' /> */}
                            </div>
                            <div class="col-sm-12 form-group mb-3 labelcontrol" data-for="url">
                                <label htmlFor="" className='form-label' >Data de nascimento: </label>
                                <input type="date" name="telephone" id="" className='form-control' onChange={event => setNasc(event.target.value)} />
                            </div>
                            <div class="col-sm-12 form-group mb-3 labelcontrol" data-for="url">
                                <label htmlFor="" className='form-label' >Função: </label>
                                <select class="form-select" required="" onChange={event => setFuncao(event.target.value)}>
                                    <option value="">[Selecione uma Função]</option>
                                    <option value="ajudante-eletricicista">Ajudante Eletricicista</option>
                                    <option value="ajudante-eletromecan">Ajudante Eletromecan</option>
                                    <option value="ajudante-encanador">Ajudante Encanador</option>
                                    <option value="ajudante-serralheiro">Ajudante de Serralheiro</option>
                                    <option value="ajudante-soldador">Ajudante de Soldador</option>
                                    <option value="almoxarife">Almoxarife</option>
                                    <option value="apontador">Apontador</option>
                                    <option value="armador">Armador</option>
                                    <option value="assistente-engenharia">Assistente Engenharia</option>
                                    <option value="aux-eletricista">AUX Eletricista</option>
                                    <option value="auxiliar-de-montagem">Auxiliar de Montagem</option>
                                    <option value="auxiliar-de-pintor">Auxiliar de Pintor</option>
                                    <option value="auxiliar-licitacao">Auxiliar Licitação</option>
                                    <option value="bombeiro-civil">Bombeiro Civil</option>
                                    <option value="cabista">Cabista</option>
                                    <option value="cadista">Cadista</option>
                                    <option value="calceteiro">Calceteiro</option>
                                    <option value="carpinteiro">Carpinteiro</option>
                                    <option value="comprador">Comprador</option>
                                    <option value="elet-forca-controle">ELET Força Controle</option>
                                    <option value="elet-montador">ELET Montador</option>
                                    <option value="eletricista">Eletricista</option>
                                    <option value="eletricista-montador">Eletricista Montador</option>
                                    <option value="eletrotecnico">Eletrotécnico</option>
                                    <option value="eng-eletricista">ENG Eletricista</option>
                                    <option value="eng-seg-trab">ENG de SEG do TRAB</option>
                                    <option value="esteticista">Esteticista</option>
                                    <option value="ferreiro">Ferreiro</option>
                                    <option value="fiscal">Fiscal</option>
                                    <option value="marceneiro">Marceneiro</option>
                                    <option value="mecanico">Mecânico</option>
                                    <option value="montador">Montador</option>
                                    <option value="motorista">Motorista</option>
                                    <option value="motorista-eletricista">Motorista Eletricista</option>
                                    <option value="ope-retroescavadeira">OPE de Retroescavadeira</option>
                                    <option value="operador-bombas">Operador de Bombas</option>
                                    <option value="operador-munk">Operador de Munk</option>
                                    <option value="pedreiro">Pedreiro</option>
                                    <option value="pintor">Pintor</option>
                                    <option value="podador">Podador</option>
                                    <option value="serralheiro">Serralheiro</option>
                                    <option value="servente">Servente</option>
                                    <option value="soldador">Soldador</option>
                                    <option value="tecnico-eltromecanico">Técnico Eletromecânico</option>
                                    <option value="tecnico-mecanico">Técnico Mecânico</option>
                                    <option value="tecnico-saneamento">Técnico Saneamento</option>
                                    <option value="topografo">Topógrafo</option>

                                </select>
                            </div>
                            <div class="col-sm-12 form-group mb-3 labelcontrol" data-for="url">
                                <label htmlFor="" className='form-label' >Estado: </label>
                                <select class="form-select" required="" onChange={event => setEstado(event.target.value)}>
                                    <option value="">[Selecione um Estado]</option>
                                    <option value="Acre">Acre</option>
                                    <option value="Alagoas">Alagoas</option>
                                    <option value="Amapá">Amapá</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Ceará">Ceará</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Espírito Santo">Espírito Santo</option>
                                    <option value="Goiás">Goiás</option>
                                    <option value="Maranhão">Maranhão</option>
                                    <option value="Mato Grosso">Mato Grosso</option>
                                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                    <option value="Minas Gerais">Minas Gerais</option>
                                    <option value="Pará">Pará</option>
                                    <option value="Paraíba">Paraíba</option>
                                    <option value="Paraná">Paraná</option>
                                    <option value="Pernambuco">Pernambuco</option>
                                    <option value="Piauí">Piauí</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                    <option value="Rondônia">Rondônia</option>
                                    <option value="Roraima">Roraima</option>
                                    <option value="Santa Catarina">Santa Catarina</option>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Sergipe">Sergipe</option>
                                    <option value="Tocantins">Tocantins</option>
                                </select>
                            </div>
                            <div class="col-6 form-group mb-3 labelcontrol" data-for="url">
                                <label htmlFor="" className='form-label' >Cidade: </label>
                                <input type="text" name="telephone" id="" className='form-control' onChange={event => setCidade(event.target.value)} />
                            </div>
                            <div class="col-12 form-group mb-3 labelcontrol">
                                <label className='form-label'> É PCD? </label>
                                <input
                                    type="checkbox"
                                    checked={isPCD}
                                    onChange={(e) => setIsPCD(e.target.checked)}
                                    style={{ marginLeft: 10, padding: 5 }}
                                    disabled={isAprendiz}
                                />
                                <label className='form-label' style={{ marginLeft: 10 }}> É Aprendiz? </label>
                                <input
                                    type="checkbox"
                                    checked={isAprendiz}
                                    onChange={(e) => setIsAprendiz(e.target.checked)}
                                    style={{ marginLeft: 10, padding: 5 }}
                                    disabled={isPCD}
                                />
                            </div>
                            {isPCD && (
                                <div class="col-6 form-group mb-3 labelcontrol" data-for="url">
                                    <label className='form-label'>Tipo de Deficiencia:</label>
                                    <select
                                        value={tipoDeficiencia}
                                        onChange={(e) => setTipoDeficiencia(e.target.value)}
                                        required
                                        className='form-control'
                                    >
                                        <option value="">Selecione</option>
                                        <option value="Física">Física</option>
                                        <option value="Auditiva">Auditiva</option>
                                        <option value="Visual">Visual</option>
                                        <option value="Intelectual">Intelectual</option>
                                        <option value="Múltipla">Múltipla</option>
                                        <option value="Outra">Outra</option>
                                    </select>
                                    <input
                                        className='form-control'
                                        placeholder="Detalhes da deficiência"
                                        value={detalhesDeficiencia}
                                        onChange={event => setDetalhesDeficiencia(event.target.value)}
                                        type="text"
                                    />
                                    <input
                                        className='form-control'
                                        placeholder="Necessidades específicas (Ex: Acessibilidade)"
                                        value={necessidadesEspecificas}
                                        onChange={event => setNecessidadesEspecificas(event.target.value)}
                                        type="text"
                                    />
                                </div>
                            )}




                            <div class="col-12 form-group mb-3" data-for="url">
                                <label htmlFor="" className='form-label' >Anexar Curriculo: <span>em formato pdf ate 5mb</span> </label>
                                <input type="file" accept='application/pdf,application' name="filepdf" class="form-control" onChange={event => setFile(event.target.files[0])} />
                            </div>
                            <div class="col-12 form-group mb-3" data-for="textarea">
                                <textarea name="textarea" placeholder="Descreva um pouco sua vida profissional." class="form-control" onChange={event => setObservation(event.target.value)} ></textarea>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                <button type="submit" class="btn btn-primary display-4" onClick={HandlerSendFormTrabalhe} >Enviar Curriculo</button>
                            </div>
                        </div>
                        <span class="gdpr-block">
                            <label>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
                                </div>
                                <span class="textGDPR display-7" style={{ color: '#a7a7a7' }}><input type="checkbox"
                                    name="gdpr" id="gdpr-form7-1k" checked={checked} onChange={() => setCheked(!checked)} />Eu concordo com os termos de serviços <a
                                        style={{ color: '#149dcc', }} href="terms.html">Termos e serviços</a> e com a  <a style={{ color: '#149cc', textDecoration: 'none' }}
                                            href="/etica#content6-1n">Política de Privacidade</a>.</span>
                            </label>
                        </span>
                        {
                            messageError ? <div class="alert alert-danger" role="alert">
                                {messageError}
                            </div> : null
                        }
                        {
                            resultTrue ? <div class="alert alert-success" role="alert">
                                Curriculum enviado com sucesso!
                            </div> : null
                        }
                    </form>


                </div>
            </div>
        </div>
    </section>
}

export default TrabalheForm;