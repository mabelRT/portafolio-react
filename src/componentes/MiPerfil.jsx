import Footer from "./Footer";
import mabel from "../imagenes/mabel renjifo.png";
import "../css/global.css"
import "../css/miperfil.css"
import skills1 from "../imagenes/skills1.png"
import skills2 from "../imagenes/skills2.png"

export default function MiPerfil() {
  return (
    <>
      <Footer />
      <section className="perfil-contenedor">
        <div className="perfil-cont-img">
          <img className="perfil-img" src={mabel} alt=""></img>
          <a  class="home-button perfil-button" href="https://drive.google.com/drive/folders/1BkhXLB52NpPbiI8DO8JzQST1v8yysLW3?export?format=pdf" target="blank">DESCARGAR CV</a>
        </div>

        <div className="perfil-cont-datos">
          <h2>Hola, soy Mabel</h2>
          <p>
            Una desarrolla Front End Developer y maestra de matemática,
            comprometida en potenciar mis habilidades en diseño, prototipado,
            desarrollo de proyectos y solución de problemas. Busco seguir
            aprendiendo durante mi desempeño laboral y ampliar mis conocimientos
            sobre nuevas tecnologías. Me considero una persona, autodidacta,
            creativa, metódica, colaborativa y ágil en solución problemas.
          </p>
          <div className="perfil-divs">
            <div className="perfil-div">
              <h3>my skills</h3>
              <ul>
                <li className="perfil-li" type="disc">Capacidad analítica.</li>
                <li className="perfil-li" type="disc">Pensamiento crítico.</li>
                <li className="perfil-li" type="disc">Gestión de proyecto.</li>
                <li className="perfil-li" type="disc">Investigación de usuarios.</li>
              </ul>
            </div>
            <div className="perfil-div">
              <img class="perfil-imgsk" src={skills1} alt=""></img>
            </div>
            <div className="perfil-div">
              <img class="perfil-imgsk" src={skills2} alt=""></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
