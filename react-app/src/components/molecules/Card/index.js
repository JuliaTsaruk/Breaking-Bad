import React from "react"
import style from "./styles.module.scss"
import cardImg from "../../../assets/images/card-img.png"

const Card = function(){
    return(
        <div className={style.card}>
            <div className={style.image}>
                <img src={cardImg} alt="card-img"/> 
            </div>
            <div className={style.personInfo}>
                <p className={style.personStatus}>живой</p>
                <p className={style.personName}>Андрей Панасюк</p>
                <p className={style.personBirth}>23.11.2001</p>
            </div>
        </div>
    )
}

export default Card

