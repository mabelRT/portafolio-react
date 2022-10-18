import { Route, Routes,HashRouter} from "react-router-dom";
import HomePages from "./componentes/HomePages";
import MiPerfil from "./componentes/MiPerfil";
import Proyectos from "./componentes/Proyectos.jsx";
import Informacion from "./componentes/Informacion";

function App() {
  return (

    <HashRouter>
    
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path="/miperfil" element={<MiPerfil/>}/>
        <Route path="/informacion" element={<Informacion/>}/>
      </Routes>
    </HashRouter>
    
    
  );
}

export default App;
