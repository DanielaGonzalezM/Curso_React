

const activo = true;

let mensaje='';

//mensaje= activo ? 'Activo' : 'Inactivo';  //espera respuesta para si y no
mensaje= activo && 'Activo'; //retorna falso si la condición no se cumple
console.log(mensaje);