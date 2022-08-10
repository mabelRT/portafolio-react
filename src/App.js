import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePages from "./componentes/HomePages";
import MiPerfil from "./componentes/MiPerfil";
import Proyectos from "./componentes/Proyectos.jsx";
import Informacion from "./componentes/Informacion";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path="/miperfil" element={<MiPerfil/>}/>
        <Route path="/informacion" element={<Informacion/>}/>
      </Routes>
    </BrowserRouter>
    //  
    //   <Route path='/information' element={<Information />} />
    //   <Route path='/projects' element={<Proyectos />}/>
    //   <Route path='/'  element={<HomePages />}/>
     
    //  </Routes>
    
  );
}

export default App;
