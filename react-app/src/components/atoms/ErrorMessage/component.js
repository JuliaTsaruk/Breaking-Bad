import React from "react";
import style from "./styles.module.scss";

const ErrorMessage = (error) => {
  return <div className={style.error}>Произошла ошибка!{error.name}</div>;
};

export default ErrorMessage;