import React from 'react';
import styles from '../Styles/card.module.css';
import { Link } from 'react-router-dom';


export default function Card({max, min, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div className={`${styles.dimensionesCard} ${styles.letra}`}>
        <button onClick={onClose} className={styles.button}>X</button>
          <Link  to={`/ciudad/${id}`} className={styles.link} >
      <div className={styles.grid}>
          <span className={styles.titulo} >{name}</span>
          <img className={styles.imagen} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen clima"/>
          <div className={styles.grilla}>
            <span className={styles.ref}>Min </span>
            <span className={styles.temp}>{min}{"°"} </span>
            <span className={styles.ref}>Max </span>
            <span className={styles.temp}>{max}{"°"}  </span>
          </div>
      </div>
        </Link>
    </div>
  )
};