import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas para 07-deses-arr.js',()=>{
    test('prueba retornaArreglo', () => { 
        const arregloTest=['ABC', 123];

        const [letras,numeros]=retornaArreglo();

        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');
        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');

        
     })

})