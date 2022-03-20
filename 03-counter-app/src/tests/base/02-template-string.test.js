import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';


describe('Pruebas en 02-template-string.js',()=>{
    test('prueba getSaludo', () => { 
        const nombre='Daniela';

        const saludo=getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre);
     })

     //getSaludo debe retornar Hola Carlos! si no hay argumento
     test('prueba getSaludo sin argumento', () => { 
        

        const saludo=getSaludo();

        expect(saludo).toBe('Hola Bryam');
     })
});