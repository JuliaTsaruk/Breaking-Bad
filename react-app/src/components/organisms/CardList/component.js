import React from "react";
import style from "./styles.module.scss";
import Card from "../../molecules/Card/component";

const CardList = ({cards}) => {
  return (
    <div className={style.cardList}>
      {cards.length && cards.map((card) => (
        <Card
          img={card.img}
          name={card.name}
          birthday={card.birthday}
          status={card.status}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default CardList