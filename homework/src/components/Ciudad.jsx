import React from "react";
import style from '../Styles/city.module.css';

export default function Ciudad({city}) {
    if (city === null) return "Esta ciudad no se encuentra en la lista";
    return (
        <div className={style.bigGrid}>
        <div className={style.ciudad}>
                <h2 className={style.title}>{city.name}</h2>
                <div className={style.container}>
                        <label className={style.text}>Temperatura:</label>
                        <p className={style.text}>{city.temp} ºC</p>                    
                        <label className={style.text}>Clima:</label>
                        <p className={style.text}>{city.weather}</p>
                        <label className={style.text}>Viento:</label>
                        <p className={style.text}>{city.wind} km/h</p>
                        <label className={style.text}>Cantidad de nubes:</label>
                        <p className={style.text}>{city.clouds}</p>
                        <label className={style.text}>Latitud:</label>
                        <p className={style.text}>{city.latitud}º</p>
                        <label className={style.text}>Longitud:</label>
                        <p className={style.text}>{city.longitud}º</p>
                </div>
        </div>
        </div>
    )
}