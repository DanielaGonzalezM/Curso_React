import heroes,{owners} from '../data/heroes';

console.log(owners);
console.log(heroes);

const getHeroeByID=(id)=>{
    return heroes.find(heroe=>heroe.id===id);
}


console.log(getHeroeByID(2));

const getHeroeByOwner=(owner)=> heroes.filter(heroe=>heroe.owner===owner);

console.log(getHeroeByOwner('DC'));
