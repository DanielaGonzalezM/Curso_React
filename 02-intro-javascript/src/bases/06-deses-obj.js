//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Daniela',
    edad: 30,
    clave: 'sfafsd',

}

const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave);

const retornaPersona = ({ nombre, clave, edad, rango = 'Capitan' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.3421,
            lng:24.424
        }
    }
};

const{nombreClave,anios,latlng:{lat,lng}}=retornaPersona(persona);
console.log(nombreClave,anios,lat,lng);