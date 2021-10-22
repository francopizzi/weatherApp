import React from 'react';
import styles from '../Styles/about.module.css';


export default function About(props) {
  return (
    <div >
      <h1 className={styles.titulo}>About: </h1>
      <p className={styles.parrafo}> Esta App de clima es una "single page aplication", la misma toma los datos de una API la cual se encarga
        de enviarnos la informacion del clima que hay en la ciudad que nosotros elijamos en el "input". Las tecnologias
        utilizadas son Javascript, React, CSS.</p>
    </div>
  );
}