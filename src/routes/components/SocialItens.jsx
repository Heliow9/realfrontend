
import React, { useEffect, useState } from 'react';
import axios from 'axios'
function SocialItens() {


    useEffect(() => {
        async function getInstagram() {

            await axios.get('http://localhost:3001').then((result) => {
                if (result > 0) {
                    setInstaData(result.data);
                }
            })
        }

        getInstagram()

    }, [])

    const [instaData, setInstaData] = useState(false)
    console.log(instaData)


    return <section data-bs-version="5.1" class="features3 cid-toLOhKUhVL" id="features3-t">


        <div class="container">
            <div class="mbr-section-head">
                <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Acompanhe nossas redes sociais</strong></h4>
                {/* <h5 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Itens&nbsp; vindos do instagram</h5> */}
            </div>
            <div class="row mt-4">
                {/* {
                    instaData ? instaData.map((item, index) => (
                        <div class="item features-image сol-12 col-md-6 col-lg-4">
                            <div class="item-wrapper">
                                <div class="item-img">
                                    <img src={item.thumbnail_src} crossOrigin="anonymous" alt="Mobirise Website Builder" />
                                </div>
                                <div class="item-content">
                                    <h5 class="item-title mbr-fonts-style display-7"><strong>Texto h1</strong></h5>

                                    <p class="mbr-text mbr-fonts-style mt-3 display-7">texto legenda</p>
                                </div>
                                <div class="mbr-section-btn item-footer mt-2"><a href="#" class="btn btn-primary item-btn display-7" target="_blank">Leia Mais
                                    &gt;</a></div>
                            </div>
                        </div>
                    )) : (
                        <>
                            <div class="item features-image сol-12 col-md-6 col-lg-4">
                                <div class="item-wrapper align-spinner">
                                    <div class="spinner-grow text-primary" role="status">
                                    </div>
                                </div>
                            </div>
                            <div class="item features-image сol-12 col-md-6 col-lg-4">
                                <div class="item-wrapper align-spinner">
                                    <div class="spinner-grow text-primary" role="status">
                                    </div>
                                </div>
                            </div>
                            <div class="item features-image сol-12 col-md-6 col-lg-4">
                                <div class="item-wrapper align-spinner">
                                    <div class="spinner-grow text-primary" role="status">
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                } */}

                <div class="powr-instagram-feed" id="f7aadcae_1677766814"></div>

            </div>
        </div>
    </section>
}

export default SocialItens;