const personajes = ['Daniela', 'Bryam', 'Canela'];
//F2 para cambiar todas las contantes
const [, , p3] = personajes;


console.log(p3);



const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const getState = ( valor ) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = getState('Dany');
console.log(nombre);

setNombre();