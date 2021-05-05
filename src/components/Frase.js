import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    @media(min-width: 900px){
        margin-top: 10rem;
    }

    h1{ //la frase
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {//psudoelemento hijo del h1 (el & es lo que hace referencia a que es hijo)
            content: open-quote; //agrega las comillas
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{ // el autor
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

`;

const Frase = ({frase}) => {

    //if(Object.keys(frase).length === 0) return null; //si no trae nada el objeto, regresa

    const {quote, author} = frase;
    return ( 
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>- {author}</p>
        </ContenedorFrase>
        
     );
}
 
export default Frase;