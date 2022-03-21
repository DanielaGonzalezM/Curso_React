import { getHeroeByID, getHeroeByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas 08-imp-exp.js',()=>{

    test('pruebas getHeroeByID', () => { 
        const idTest=1;

        const heroe=getHeroeByID(idTest);

        const heroeData=heroes.find(h=>h.id);
        
        expect(heroe).toEqual(heroeData);
        
     });

     test('pruebas getHeroeByID heroe no existe', () => { 
        const idTest=30;

        const heroe=getHeroeByID(idTest);
        
        expect(heroe).toBe(undefined);
        
     });

     test('pruebas getHeroeByOwner', () => { 
        const owner='DC';

        const heroe=getHeroeByOwner(owner);
        
        const heroesData=heroes.filter(h=>h.owner===owner);

        expect(heroesData).toEqual(heroe);
        
     });

     test('pruebas getHeroeByOwner Marvel', () => { 
        const owner='Marvel';

        const heroe=getHeroeByOwner(owner);
        
        expect(heroe.length).toBe(2);
        
     });


});