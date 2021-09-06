import React from "react";
import style from "./styles.module.scss";
//import {useDispatch} from "react-redux";
import { change } from "../../../store/actions/test";

const Card = ({ img, status, name, birthday }) => {
  // const dispatch = useDispatch()
  

  // const changeAction = () => {
  //   dispatch(change())
  // }
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img onClick={change} src={img} alt="card-img" />
      </div>
      <div className={style.info}>
        <p className={style.status}>{status}</p>
        <p className={style.name}>{name}</p>
        <p className={style.birth}>{birthday}</p>
      </div>
    </div>
  );
};
export default Card;