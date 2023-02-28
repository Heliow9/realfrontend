import React, { useEffect } from 'react';
import "../assets/web/assets/mobirise-icons2/mobirise2.css"
import "../assets/bootstrap/css/bootstrap.min.css"
import "../assets/bootstrap/css/bootstrap-grid.min.css"
import "../assets/bootstrap/css/bootstrap-reboot.min.css"
import "../assets/parallax/jarallax.css"
import "../assets/web/assets/gdpr-plugin/gdpr-styles.css"
import "../assets/dropdown/css/style.css"
import "../assets/socicon/css/styles.css"
import "../assets/theme/css/style.css"
import "../assets/mobirise/css/mbr-additional.css"
import Navbar from './components/Navbar';
import DenunciaForm from './components/forms/DenunciaForm';
import Footer from './components/Footer';
import SectionScreen from './components/SectionScreen';



function Denuncia() {

    return (<div>


        <Navbar />
        <SectionScreen />


        <DenunciaForm />

        <Footer />

    </div>
    )
}




export default Denuncia;