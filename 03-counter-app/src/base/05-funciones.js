
export const getUser = () => ({
    uid: 'ASDF',
    username: 'userASDF'
});
const user=getUser();



export const getUsuarioActivo=(nombre)=>({
        uid: 'ASDF',
        username: nombre
});

const usuarioActivo=getUsuarioActivo('Daniela');
