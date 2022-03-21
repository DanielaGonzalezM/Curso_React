import '@testing-library/jest-dom';
import { getUser,getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas 05-funciones.js',()=>{

    test('prueba getUser', () => { 
        const userTest={
            uid: 'ASDF',
            username: 'userASDF'
        };
        const user=getUser();
        expect(user).toEqual(userTest);
     })

     test('prueba getUsuarioActivo', () => { 
        const userTest={
            uid: 'ASDF',
            username: 'Daniela'
        };
        const user=getUsuarioActivo('Daniela');
        expect(user).toEqual(userTest);
     })

});