import "../css/global.css"
import "../css/informacion.css"

import telefono from "../imagenes/phone.png"
import gmail from "../imagenes/gmail.png"
import linkedin from "../imagenes/linkedin.png"
import Footer from "./Footer"
export default function Informacion() {
    return <>
     <Footer/>
    <section className="inform-conteiner">
           
            <div className="inform-datos">
                <div className="inform-datos-logo">
                    <img className="inform-logo" src={telefono} alt="logo telefono"></img>
                    <p>Número de telefono : +56920226574</p>
                    <a  class="home-button" href="https://wa.me/51952124666">CONTACTAR</a>
                </div>
                <div className="inform-datos-logo">
                    <img className="inform-logo" src={gmail} alt="logo gmail"></img>
                    <p>gmail: wendy.torrico.wt@gmail.com</p>
                    <a  class="home-button" href="mailto:wendy.torrico.wt@gmail.com">CONTACTAR</a>
                </div>
                <div className="inform-datos-logo">
                    <img className="inform-logo" src={linkedin} alt="logo linkedin" ></img>
                    <p>https://www.linkedin.com/in/mabel-renjifo-torrico-6b9918140/</p>
                    <a  class="home-button" href="https://www.linkedin.com/in/mabel-renjifo-torrico-6b9918140/" target="blank">CONTACTAR</a>
                </div>
            </div>

    </section>
    </>
  }
  