//import { Fragment } from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({ pregunta, subtitulo}) => {

    const saludo = 'Hola ';
    const persona = {
        nombre: 'Daniela',
        edad: 30
    }


    return (
        // <Fragment> tambien sirve en vez de <>
        <>
            <h1>{saludo} {JSON.stringify(persona.nombre)}</h1>
            {/* <p>{pregunta}</p> */}
            {/* <pre>JSON:{JSON.stringify(persona,null,3)}</pre> */}
            {/* <p>Mi primera Aplicación</p> */}
            <p>{subtitulo}</p>
        </>
        // </Fragment>


    );

}

PrimeraApp.propTypes = {
    pregunta: PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitulo: 'Soy un subtitulo' 
}
export default PrimeraApp;    
