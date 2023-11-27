// import bonsai from './images/bonsai.png';
// import pino from './images/pino.jpg';
import './App.css';
import { useRef } from 'react';

// function App() {
// const refCaja=useRef();
// const cambio=23.16
//   function incrementar(e){ 
//      e.target.innerHTML = Number(e.target.innerHTML )+1;
//      if(e.target.innerHTML>=10){
//       e.target.innerHTML=1; 
//      }
//   } 
// const convertir=()=>{
//    refCaja.current.innerHTML= Number(refCaja.current.innerHTML)*cambio ;
// }
// const arbol=(j)=>{
//   if(j.target.src.includes("bonsai")){
//     j.target.src=pino;
//      }else{j.target.src=bonsai;
//   }
  
// } 
// const lector=(e)=>{
//   refCaja.current.innerHTML= e.target.value;
// }
//   return ( 
  
//     <>
//       <div ref={refCaja} className="caja" onClick={incrementar} > 1 </div>
//       <button onClick={convertir}>Aceptar</button>
//       <div><img src={bonsai}   onClick={arbol}/> </div>
//       <input onChange={lector}  className="campo " />
//     </>
    
//   );
// }

// export default App;

import React, {useState} from 'react'

const App = () => {
const [numero1, setNumero1]=useState();
const [numero2, setNumero2]=useState();
const [resultado, setResultado]=useState();

const sumar=()=>{
  setResultado(Number(numero1)+Number(numero2));
}
const modificar1 =(e)=>{
  setNumero1(e.target.value);
}
const modificar2 =(e)=>{
  setNumero2(e.target.value);
}
  return (
    <div className='caja' >
      <input type='number' value={numero1} onChange={modificar1}  /> +
      <input type='number'  value={numero2}  onChange={modificar2}/> =
      <input type='number'  value={resultado}  readOnly/> 
      <button onClick={sumar} >SUMAR</button>

    </div> )
}

export default App

