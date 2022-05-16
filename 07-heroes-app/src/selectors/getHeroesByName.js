import { heroes } from "../components/data/heroes";

export const getHeroesByName = (name = "") => {
//   name = name.toLowerCase();
//   return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
return heroes;
};
