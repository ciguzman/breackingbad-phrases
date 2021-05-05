import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase';

const apiUrl = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

const Contenedor = styled.div`
  display: flex;
  align-items: center; // este centrado verticalmente
  padding-top: 5rem;
  flex-direction: column; // por defecto es row de flex
 `;


const Boton = styled.button`
  //inicia, color de inicio al %, color de cambio en %, color hacia el 100%
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100% ); 
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer; // se ponga la mano de gato
    background-size: 400px;
  }
`;



function App() {

  // State de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    // fetch( apiUrl )
    //   .then( resp => resp.json() )
    //   .then( resp => console.log(resp));
  
    const api = await fetch(apiUrl);
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  // Cargar una frase cuando el componente este listo
  useEffect( () => {
    consultarAPI();
  }, []); // [] para que se cargue al menos una vez

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
    
  );
}

export default App;