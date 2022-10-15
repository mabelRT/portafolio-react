import "../css/global.css"
import "../css/informacion.css"

import telefono from "../imagenes/phone.png"
import gmail from "../imagenes/gmail.png"
import linkedin from "../imagenes/linkedin.png"

export default function Informacion() {
    return <>

        <section className="inform-conteiner ">
            <h1 className="proyectos-title">Trabajamos juntos?</h1>
            <div className="inform-datos">


                <div className="inform-datos-logo">


                    <a class="home-button " href="https://wa.me/56920226574" target="blank">
                        <img className="inform-logo button-logos" src={telefono} alt="logo telefono"></img>
                    </a>
                    <p># Celular</p>
                </div>
                <div className="inform-datos-logo">


                    <a class="home-button " href="mailto:wendy.torrico.wt@gmail.com" target="blank">
                        <img className="inform-logo button-logos" src={gmail} alt="logo gmail" />
                    </a>
                    <p>Correo</p>
                </div>
                <div className="inform-datos-logo">


                    <a class="home-button " href="https://www.linkedin.com/in/mabel-renjifo-torrico-6b9918140/" target="blank">
                        <img className="inform-logo button-logos" src={linkedin} alt="logo linkedin" />
                    </a>
                    <p>Linkedin</p>
                </div>
            </div>

        </section>
    </>
}
