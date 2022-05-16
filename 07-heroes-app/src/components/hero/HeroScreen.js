import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroId),[heroId]);

  const handleReturn = () => {
    navigate(-1);
  };
  if (!hero) {
    return <Navigate to="/" />;
  }

  const {
    alter_ego,
    characters,
    first_appearance,
    id,
    publisher,
    superhero,
  } = hero;
  const imagePath = `/assets/img/heroes/${id}.jpg`;
  return (
    <div className="row mt-5">
      <div className=" col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
