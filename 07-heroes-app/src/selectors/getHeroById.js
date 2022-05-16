import React from "react";
import { heroes } from "../components/data/heroes";

export const getHeroById = (id = "") => {
  return heroes.find((hero) => hero.id === id);
};
