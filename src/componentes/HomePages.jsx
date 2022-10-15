
import MiPerfil  from "./MiPerfil";
import Proyectos from "./Proyectos";
import Informacion from "./Informacion"
import "../css/global.css";
import "../css/homePages.css";
import Nav from "./Nav";
import Mbwl from "./Footer.jsx"


const HomePages = () => {
  return (
    <main className="home-conteiner ">
      <div className="home-subConteiner">
      
        <Nav />

        <section className="home-img">
          <div className="home-contenido">
            <div className="font-border">
            <h2 className=" title-font-1">Mabel Wendy Renjifo </h2>
            </div>
            <div class="ubicacion">
              <p className="home-subTitle">Frond End Developer</p>
            </div>

          </div>
        </section>
      </div>
      <div class="container-mp1">
      <MiPerfil />
      </div>
      <div class="container-mp2">
      <Proyectos />
      </div>
      <div class="container-mp3">
      <Informacion />
      </div>
      <Mbwl />
    </main>
  );
};
export default HomePages;
