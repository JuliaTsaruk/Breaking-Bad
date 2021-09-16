import React from "react";
import style from "./styles.module.scss";
import Card from "../../molecules/Card/component";
import Loader from "../../atoms/Loader/component";
import ErrorMessage from "../../atoms/ErrorMessage/component";

const CardList = ({ characters, isFetching, isError }) => {
  return (
    <div>
      <div>
        {isError ? (
          <ErrorMessage name=" Не удалось загрузить данные." />
        ) : !isFetching ? (
          <div className={style.cardList}>
            {characters.map((character) => (
              <Card
                img={character.img}
                name={character.name}
                birthday={character.birthday}
                status={character.status}
                key={character.id}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default CardList;