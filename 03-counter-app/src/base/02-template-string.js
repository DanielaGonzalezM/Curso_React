const nombre = 'Daniela';
const apellido = 'Gonzalez';

//const nombreCompleto=nombre+' '+apellido;
const nombreCompleto = `${nombre} ${apellido}`;
//console.log(nombreCompleto);

export function getSaludo(nombre ='Bryam') {
    return 'Hola ' + nombre
}


//console.log(`Este es un texto: ${getSaludo(nombre)}`)