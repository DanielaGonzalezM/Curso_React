import { heroes } from "../components/data/heroes";

export const getHeroesByName = (name = "") => {
    if(name===''){
        return [];
    }
   name = name.toLowerCase();
   return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));

};
