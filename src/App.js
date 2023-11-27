import imagen0 from  './imagenes/roble1.png'; 
import imagen1 from  './imagenes/roble2.png'; git
import imagen2 from  './imagenes/roble3.png';

// import './App.css';
import './micss.css';//importamos un css propio
 
 function App() {
   let nombre=["roble1","roble2", "roble3"];
  return (
  
  <div className="arboles">

    <div className="caja">
    <img src={imagen0}/>
    <div className="nombre">{nombre[0]} </div> 
    </div>
    <div className="caja">
    <img src={imagen1}/>
    <div className="nombre">{nombre[1]} </div> 
    </div>
    <div className="caja">
    <img src={imagen2}/>
    <div className="nombre">{nombre[2]} </div> 
    </div>

    </div>
  );
}

export default App;
