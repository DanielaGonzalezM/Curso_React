import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Hero Screen</h1>
      <p>{hero.superhero}</p>
    </div>
  );
};

export default HeroScreen;
