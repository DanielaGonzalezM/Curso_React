const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Daniela'));

console.log(saludar2('Daniela'));

console.log(saludar3('Daniela'));

const getUser = () => ({
    uid: 'ASDF',
    username: 'userASDF'
});
const user=getUser();
console.log(user);


const getUsuarioActivo=(nombre)=>({
        uid: 'ASDF',
        username: nombre
});

const usuarioActivo=getUsuarioActivo('Daniela');
console.log(usuarioActivo);