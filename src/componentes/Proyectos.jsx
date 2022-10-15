
import "../css/proyectos.css"
import "../css/global.css"
import wubba from "../imagenes/wuba.png";
import ey from "../imagenes/ey.png";
import camisas from "../imagenes/camisas.png"
import burger from "../imagenes/burger.png"
import react from "../imagenes/react.png"
import css from "../imagenes/css.png"
import firebase from "../imagenes/firebase.png"
import html from "../imagenes/html.png"
import javascript from "../imagenes/javascript.png"




export default function Proyectos() {
  return (
    <>

      <section className="conteiner-proyectos section-container">
        <h1 className="proyectos-title">Mis proyectos</h1>

        <div className="conteiner-pro">


          {/* proyecto ENCICLOPEDIA WUBBA LUBBA */}
          <div className="proyecto-conteiner wubba">
            <div className="img-conteiner">
              <img src={wubba} alt="" />
              <div className="proyecto-btn-conteiner">
                <a class="home-button proyecto-btn" href="https://kyoyarzun.github.io/SCL018-data-lovers/src/" target="blank">Demo</a>
                <a class="home-button proyecto-btn" href="https://github.com/mabelRT/SCL018-data-lovers" target="blank">Codigo</a>
              </div>
            </div>
            <div className="proyecto-text">
              <h3>ENCICLOPEDIA WUBBA LUBBA</h3>
              <p>Interfaz web inspirada en la serie animada Rick and Morty,
                a través de filtros el usuario puede acceder a información
                de cada personaje.
                El proyecto se desarrollo con HTML, CSS y Vainilla JS.</p>
              <div className="proyecto-logos">
                <img className="img-icon" src={html} alt=""/>
                <img className="img-icon" src={css} alt=""/>
                <img className="img-icon" src={javascript} alt=""/>
              </div>
            </div>
          </div>

          {/* proyecto Burger Queen< */}
          <div className="proyecto-conteiner">
            <div className="img-conteiner">
              <img src={burger} alt="" />
              <div className="proyecto-btn-conteiner">
                <a class="home-button proyecto-btn" href="https://incredible-elf-ba2f1d.netlify.app/" target="blank">Demo</a>
                <a class="home-button proyecto-btn" href="https://github.com/mabelRT/SCL018-burger-queen" target="blank">Codigo</a>
              </div>
            </div>
            <div className="proyecto-text">
              <h3>Burger Queen</h3> {/* falta enlace */}
              <p>Aplicacion web para generar pedidos a un restaurante de manera online </p>
              <div className="proyecto-logos">
          <img className="img-icon" src={html} alt=""/>
          <img className="img-icon" src={css} alt=""/>
          <img className="img-icon" src={javascript} alt=""/>
          <img className="img-icon" src={react} alt=""/>
          
          </div>
            </div>
          </div>

                   {/* EY INSURANCE: APLICACIÓN PARA COBRANZA DE SEGURO AUTOMOTRIZ */}
          <div className="proyecto-conteiner ey">
            <div className="img-conteiner">
              <img src={ey} alt="" />
              <div className="proyecto-btn-conteiner">
                <a class="home-button proyecto-btn" href="https://ey-insurance-5a2d0.web.app/" target="blank">Demo</a>
                <a class="home-button proyecto-btn" href="https://github.com/mabelRT/EY-Insurance" target="blank">Codigo</a>
              </div>
            </div>
            <div className="proyecto-text">
              <h3>EY INSURANCE: APLICACIÓN PARA COBRANZA DE SEGURO AUTOMOTRIZ</h3>
              <p>Proyecto Ganador del primer lugar en el Talent Fest Chile 2022 de Laboratoria</p>
              <p>Para ingresar:correo: atolosab@gmail.com // contraseña: ejemplo01</p>

             
                <div className="proyecto-logos">
                  
             <img className="img-icon" src={html} alt=""/>
             <img className="img-icon" src={css} alt=""/>  
             <img className="img-icon" src={javascript} alt=""/>
             <img className="img-icon" src={react} alt=""/> 
             <img className="img-icon" src={firebase} alt=""/>
                </div>
              

            </div>
          </div>

          {/* proyecto Tienda en linea */}
          <div className="proyecto-conteiner">
            <div className="img-conteiner">
              <img src={camisas} alt="" />
              <div className="proyecto-btn-conteiner">
                <a class="home-button proyecto-btn" href="https://cosmic-sawine-47c405.netlify.app/" target="blank">Demo</a>
                <a class="home-button proyecto-btn" href="https://github.com/mabelRT/tienda-camisetas" target="blank">Codigo</a>
              </div>
            </div>
            <div className="proyecto-text">
              <h3>Tienda en linea</h3> {/* falta enlace */}
              <p>Interfaz web que simula una tienda online de camisetas.Proyecto generado con HTML y CSS </p>
              <div className="proyecto-logos">
  <img className="img-icon" src={html} alt=""/>
  <img className="img-icon"src={css} alt=""/>        
  </div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}
