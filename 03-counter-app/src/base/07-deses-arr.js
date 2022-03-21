const personajes = ['Daniela', 'Bryam', 'Canela'];
//F2 para cambiar todas las contantes
const [, , p3] = personajes;

export const retornaArreglo = () => {
    return ['ABC', 123];
}

//const [letras, numeros] = retornaArreglo();

const getState = ( valor ) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

