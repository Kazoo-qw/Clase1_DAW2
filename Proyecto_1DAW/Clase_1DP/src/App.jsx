import { useState } from "react";
import "./App.css"


function App(){
  const nombre = 'Jesus'
  const [ contador, setContador ] = useState( 0 );
  const [ color, setColor ] = useState("negro")
  const [otroColor , setOtroColor] = useState("negro")

  const sumar = () => {
    const suma = contador + 1
    setContador( suma )
    cambiarColor( suma )
  }

  const restar = () => {
    const resta = contador - 1
    setContador( resta )
    cambiarColor( resta )
  }

  const reiniciar = () => {
    setContador( 0 )
    cambiarColor( 0 )
  }

  const cambiarColor = (contador) => {
    if (contador > 0){
      setColor("verde")
    }else if (contador < 0) {
      setColor("rojo")
    }else{
      setColor("negro")
    }
  }

  return(
    <>
    <h1>Hola munde :)</h1>
    <h2 className="verde" >Mi nombre es: { nombre } { 5 + 9 } </h2>
    <p className= { color } >Cantidad de clicks : { contador } </p>
    <button type="button" onClick= { sumar } >Sumar</button>
    <button type="button" onClick= { restar } >Restar</button>
    <button type="button" onClick= { reiniciar } >Reiniciar</button>

    <p className= { otroColor } >Mi color es: { otroColor }</p>
    <button type="button" onClick= {()=> setOtroColor("verde")} >Verde</button>
    <button type="button" onClick= {()=> setOtroColor("rojo")} >Rojo</button>
    <button type="button" onClick= {()=> setOtroColor("negro")} >Negro</button>
    </>
  );
}

export default App;

//