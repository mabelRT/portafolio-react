import Footer from "./Footer";
import "../css/proyectos.css"
import "../css/global.css"
import wubba from "../imagenes/wuba.png";
import easy from "../imagenes/easy.png";
import ey from "../imagenes/ey.png";
import cesar from "../imagenes/chiper.png"
import portafolio from "../imagenes/portafolio.png"
import camisas from "../imagenes/camisas.png"
import burger from "../imagenes/burger.png"




export default function Proyectos() {
  return (
    <>
      <Footer />
      <section className="conteiner-proyectos">
        <h2>Mis proyectos</h2>

        <div className="conteiner-pro">

          {/* proyecto cesar*/}
          <div className="proyecto-conteiner wubba">
            <div className="img-conteiner">
              <img src={cesar} alt="" />
            </div>
            <h3>Cifrado cesar</h3>
            <p> Pagina Web creada para incriptar contraseñas usando el codigo cesar.
              El proyecto se desarrollo con HTML, CSS y Vainilla JS.</p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://golden-chebakia-94b8d4.netlify.app/" target="blank">ver pagina</a>
              <a class="home-button proyecto-btn" href="https://github.com/mabelRT/chiper" target="blank">Repositorio</a>
            </div>
          </div>

          {/* proyecto ENCICLOPEDIA WUBBA LUBBA */}
          <div className="proyecto-conteiner wubba">
            <div className="img-conteiner">
              <img src={wubba} alt="" />
            </div>
            <h3>ENCICLOPEDIA WUBBA LUBBA</h3>
            <p>Interfaz web inspirada en la serie animada Rick and Morty,
              a través de filtros el usuario puede acceder a información
              de cada personaje.
              El proyecto se desarrollo con HTML, CSS y Vainilla JS.</p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://kyoyarzun.github.io/SCL018-data-lovers/src/" target="blank">ver pagina</a>
              <a class="home-button proyecto-btn" href="https://github.com/mabelRT/SCL018-data-lovers" target="blank">Repositorio</a>
            </div>
          </div>

          {/* proyecto Easy Veggie */}
          <div className="proyecto-conteiner easy">
            <div className="img-conteiner">
              <img src={easy} alt="" />
            </div>
            <h3>Easy Veggie</h3>
            <p>Red social enfocada a las personas vegetarianas. Para el
              desarrollo del proyecto se utilizo HTML, CSS, Vainilla JS y Firebase</p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://easy-veggie-scl018.web.app "target="blank">ver pagina</a>
              <a class="home-button proyecto-btn" href="https://github.com/mabelRT/SCL018-social-network" target="blank">Repositorio</a>
            </div>
          </div>

          {/* proyecto Burger Queen< */}
          <div className="proyecto-conteiner">
          <div className="img-conteiner">
              <img src={burger} alt="" />
            </div>
            <h3>Burger Queen</h3> {/* falta enlace */}
            <p>Aplicacion web para generar pedidos a un restaurante de manera online </p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://incredible-elf-ba2f1d.netlify.app/" target="blank">ver pagina</a>
              <a class="home-button proyecto-btn" href="https://github.com/mabelRT/SCL018-burger-queen" target="blank">Repositorio</a>
            </div>
          </div>

          {/* EY INSURANCE: APLICACIÓN PARA COBRANZA DE SEGURO AUTOMOTRIZ */}
          <div className="proyecto-conteiner ey">
            <div className="img-conteiner">
              <img src={ey} alt="" />
            </div>
            <h3>EY INSURANCE: APLICACIÓN PARA COBRANZA DE SEGURO AUTOMOTRIZ</h3>
            <p>Proyecto Ganador del primer lugar en el Talent Fest Chile 2022 de Laboratoria</p>
            <p>Para ingresar:

                  correo: atolosab@gmail.com //
                  contraseña: ejemplo01
            </p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://ey-insurance-5a2d0.web.app/" target="blank">ver pagina</a>
              <a class="home-button proyecto-btn" href="https://github.com/mabelRT/EY-Insurance" target="blank">Repositorio</a>
            </div>
          </div>

          {/* proyecto Tienda en linea */}
          <div className="proyecto-conteiner">
          <div className="img-conteiner">
              <img src={camisas} alt="" />
            </div>
            <h3>Tienda en linea</h3> {/* falta enlace */}
            <p>Interfaz web que simula una tienda online de camisetas.Proyecto generado con HTML y CSS </p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://cosmic-sawine-47c405.netlify.app/" target="blank">ver pagina</a>
              <a class="home-button proyecto-btn" href="https://github.com/mabelRT/tienda-camisetas" target="blank">Repositorio</a>
            </div>
          </div>

          {/* proyecto Blog cafe */}
          <div className="proyecto-conteiner">
          <div className="img-conteiner">
              <img src={burger} alt="" />
            </div>
            <h3>Blog cafe</h3> {/* falta enlace */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ex quae, tempore ipsum dicta reprehenderit repellendus eos, facere debitis possimus rerum, explicabo voluptatum rem. Fugiat inventore illo porro ratione ullam!</p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://ey-insurance-5a2d0.web.app/" target="blank">ver pagina</a>
              <a class="home-button proyecto-btn" href="https://kyoyarzun.github.io/SCL018-data-lovers/src/" target="blank">Repositorio</a>
            </div>
          </div>

          {/* proyecto portafolio */}
          <div className="proyecto-conteiner">
          <div className="img-conteiner">
              <img src={portafolio} alt="" />
            </div>
            <h3>portafolio</h3> {/* falta enlace */}
            <p>Pagia web que aloja mi informacion y datos.
            HTML, CSS, Vainilla JS y React.         
            </p>
            <div className="proyecto-btn-conteiner">
              <a class="home-button proyecto-btn" href="https://github.com/mabelRT/portafolio-react" target="blank">Repositorio</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
