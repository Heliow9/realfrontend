import React, { useState } from 'react';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../database/firebase'
// import { Container } from './styles';

function TrabalheForm() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [cargos, setCargos] = useState("")
    const [nasc, setNasc] = useState("")
    const [file, setFile] = useState([])
    const [observation, setObservation] = useState("")
    const [pdfUrl, setPdfUrl] = useState()
    const [progress, setProgress] = useState(0)

    function HandlerSendFormTrabalhe(e) {
        e.preventDefault()

        
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
                    setPdfUrl(url)
                })
            }
        )

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

                                <input type="text" name="name" placeholder="Nome" data-form-field="name" class="form-control" value="" id="name-form5-1v" />
                            </div>


                            <div class="col-md col-sm-12 form-group mb-3" data-for="email">
                                <input type="email" name="email" placeholder="E-mail" data-form-field="email" class="form-control" value="" id="email-form5-1v" />
                            </div>

                            <div class="col-12 form-group mb-3" data-for="url">

                                <select class="form-control" >
                                    <option selected disabled>Selecione o nivel de experiência</option>
                                    <option value="1">Auxiliar</option>
                                    <option value="1">Auxiliar Adm</option>
                                    <option value="1">Analista</option>
                                    <option value="1">Gerente</option>
                                    <option value="1">Coordenador</option>

                                </select>
                            </div>
                            <div class="col-12 form-group mb-3 labelcontrol" data-for="url" >
                                <label htmlFor="" className='form-label' >Telefone pra contato: </label>
                                <input type="tel" name="telephone" id="" className='form-control' placeholder='(81)xxxx-xxxx' />
                            </div>
                            <div class="col-12 form-group mb-3 labelcontrol" data-for="url">
                                <label htmlFor="" className='form-label' >Data de nascimento: </label>
                                <input type="date" name="telephone" id="" className='form-control' />
                            </div>


                            <div class="col-12 form-group mb-3" data-for="url">
                                <label htmlFor="" className='form-label' >Anexar Curriculo: </label>
                                <input type="file" accept='application/pdf,application' name="filepdf" class="form-control" onChange={event => setFile(event.target.files[0])} />
                            </div>
                            <div class="col-12 form-group mb-3" data-for="textarea">
                                <textarea name="textarea" placeholder="Observação" data-form-field="textarea" class="form-control" id="textarea-form5-1v"></textarea>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                <button type="submit" class="btn btn-primary display-4" onClick={HandlerSendFormTrabalhe} >Enviar Curriculo</button>
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
                    {<progress value={progress} />}
                </div>
            </div>
        </div>
    </section>
}

export default TrabalheForm;