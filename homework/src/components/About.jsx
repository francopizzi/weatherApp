import React from 'react';
import styles from '../Styles/about.module.css';


export default function About(props) {
  return (
    <div className={styles.bigGrid}>
    <div className={styles.about}>
      <h1 className={styles.titulo}>¿Cómo fue realizada esta APP?🤨</h1>
      <div className={styles.parrafo}>
      <p > Desarrollo de una SPA "Single Page Aplication", la misma toma los datos de una API (api.openweathermap.org) 
        la cual se encarga de enviarnos la informacion del clima que hay en la ciudad que nosotros elijamos en el buscador.
      </p>
      <p>
        Las tecnologias utilizadas son Javascript, para el manejo de estados y la dinamica de la APP, React para el front end y CSS puro 
        para el diseño, se utilizo React icons unicamente para la barra de busqueda.
        </p>
      </div>
    </div>
    </div>
  );
}



