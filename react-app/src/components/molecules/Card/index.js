import React from "react";
import style from "./styles.module.scss";

const Card = function (props) {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={props.card.img} alt="card-img" />
      </div>
      <div className={style.info}>
        <p className={style.status}>{props.card.status}</p>
        <p className={style.name}>{props.card.name}</p>
        <p className={style.birth}>{props.card.birthday}</p>
      </div>
    </div>
  );
};

export default Card;