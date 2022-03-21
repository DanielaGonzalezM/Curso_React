import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas con promesas',()=>{

    test('pruebas getHeroeByIdAsync',  ( done ) => { 
        const id=1;

        getHeroeByIdAsync(id)
            .then(h=>{
                expect(h).toBe(heroes[0]);
                done();
            })

     });

     test('pruebas getHeroeByIdAsync heroe no encontrado',  ( done ) => { 
        const id=155;

        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el heroe');
                done();
            })

     });
});