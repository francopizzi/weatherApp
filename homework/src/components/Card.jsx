import React from 'react';
import styles from '../Styles/card.module.css';
import { Link } from 'react-router-dom';
import {GrFormClose} from 'react-icons/gr'

export default function Card({max, min, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div className={`${styles.dimensionesCard} ${styles.letra}`}>
      <div className={styles.grid}>
        <button onClick={onClose} className={styles.button}>x{/*<GrFormClose/>*/}</button>
        <Link  to={`/ciudad/${id}`} className={styles.link} >
          <h3 className={styles.titulo} >{name}</h3>
        </Link>
      </div>
      <img className={styles.imagen} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen clima"/>
      <div className={styles.grilla}>
        <span className={styles.ref}>Min </span>
        <span className={styles.temp}>{min}{"°"} </span>
        <span className={styles.ref}>Max </span>
        <span className={styles.temp}>{max}{"°"}  </span>
      </div>
    </div>
  )
};