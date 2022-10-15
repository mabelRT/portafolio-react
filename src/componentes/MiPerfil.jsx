import pdf from "../imagenes/MABEL-cv.pdf"
import "../css/global.css"
import "../css/miperfil.css"
export default function MiPerfil() {
  return (
    <>
      
      <section className="perfil-contenedor section-container">
        

        <div className="perfil-cont-datos">
          <h1>Quién es Mabel?</h1>
          <p className="color-plomo">
          Hola, soy Mabel, una desarrolla Front End Developer y maestra
            licenciada en matemática, comprometida en potenciar mis
            habilidades en diseño, prototipado, desarrollo de proyectos y
            solución de problemas. Siempre quise ser parte del sector
            tecnologico, lo que me llevo a emigrar a uno de los paises con
            mayor desarrollo tecnologico de america latina, busco abrirme
            camino a traves de mi esfuerzo y dedicacion, me considero autodidacta, creativa,
            metódica, colaborativa y ágil en solución problemas.
          </p>
        </div>

        <div className="perfil-cont-img">
          <a  class="home-button perfil-button" href={pdf} target="blank" download="mabel renjifo cv">DESCARGAR CV</a>
        </div>
      </section>
    </>
  );
}
