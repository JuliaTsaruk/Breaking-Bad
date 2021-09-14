import React from "react";
import style from "./styles.module.scss";
import Card from "../../molecules/Card/component";

const CardList = ({ cards, isFetching, errorMessage }) => {
  return (
    <div>
      <div>
        {errorMessage && (
          <div className={style.error}>
            Произошла ошибка! Пожалуйста, обновите страницу!
          </div>
        )}
      </div>
      <div className={style.cardList}>
        {isFetching === false ? (
          cards &&
          cards.map((card) => (
            <Card
              img={card.img}
              name={card.name}
              birthday={card.birthday}
              status={card.status}
              key={card.char_id}
            />
          ))
        ) : (
          <div className={style.fetching}></div>
        )}
      </div>
    </div>
  );
};

export default CardList;