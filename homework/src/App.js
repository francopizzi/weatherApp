import React, {useEffect, useState} from 'react';
import './App.css';
import './components/Nav';
import './components/Cards';
import Nav from './components/Nav';
import Cards from './components/Cards';
import { Route } from 'react-router-dom';
import Ciudad from './components/Ciudad';
import About from './components/About'

export default function App() {
  const [cities, setCities] = useState([]);
 /* function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: ciudad,
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };
    setCities(oldCities => [...oldCities, ciudadEjemplo]);
  } */

  function onSearch(ciudad) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          // Verificar si existe la ciudad en pantalla para alertar al usuario en caso de que sea asi
          var flag = true;
          for (let i = 0; i<cities.length; i++)
          {
              if (cities[i].name === ciudad.name)
              {
                flag = false;
                break;
              }
          }
          if (flag) setCities(oldCities => [...oldCities, ciudad]);
          else alert("Ya existe esa ciudad en pantalla");

        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    useEffect( () =>
    {
      onSearch("neuquen");
      console.log ("me monte");
    },[]);

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }

    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
        console.log ("ingrese aca")
          return ciudad[0];
      } else {
          return null;
      }
    }


  return (
    <div className="App">
   <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route
        path='/about'
        component={About}
      /> 
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      <Route
          exact path='/ciudad/:ciudadId'
          render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
  );

}

  