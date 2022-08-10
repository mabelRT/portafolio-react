import { Link } from "react-router-dom";
import "../css/global.css";
import "../css/homePages.css";
import foto from "../imagenes/mabelrenjifo.jpeg"

const HomePages = () => {
  return (
    <main className="home-conteiner ">
      <div className="home-subConteiner">
        <section className="home-conteiner-title">
          <img className="logo-img" src={foto} alt="imagen camisa"></img>
          <h1 className="home-title">
            Hola, soy Mabel una desarrolladora front end
          </h1>
        </section>
        <section className="home-conteinerBtn">
          <nav class="home-navegacion">
            <Link to="/proyectos">
              <button className="btn-home">Mis proyectos</button>
            </Link>
            <Link to="/miperfil">
              <button className="btn-home">Mi perfil</button>
            </Link>
            <Link to="/informacion">
              <button className="btn-home">informacion de contacto</button>
            </Link>
          </nav>
        </section>

        <section className="home-img">
          <div className="home-contenido">
            <h2 className="home-subTitle">WEB DEVELOPER</h2>
            <div class="ubicacion">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-map-pin"
                  width="88"
                  height="88"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffec10"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </p>
              <p>Santiago, Chile</p>
            </div>

            <div class="home-boton">
            <a  class="home-button" href="mailto:wendy.torrico.wt@gmail.com">CONTACTAR</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default HomePages;
