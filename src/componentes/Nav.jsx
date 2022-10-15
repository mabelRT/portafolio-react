import { Link } from "react-router-dom";

import "../css/global.css"

export default function nav() {
    return <header>
      <Link to="/">
      <section className="home-conteinerBtn">
        
          <nav class="home-navegacion">
          
            <Link to="/proyectos">
              <button className="btn-home ">Mis proyectos</button>
            </Link>
            <Link to="/miperfil">
              <button className="btn-home ">Mi perfil</button>
            </Link>
            <Link to="/informacion">
              <button className="btn-home ">informacion de contacto</button>
            </Link>
          </nav>
        </section>
            </Link>
    </header>
  }