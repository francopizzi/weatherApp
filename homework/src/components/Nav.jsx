import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from '../Styles/nav.module.css';
import imagen1 from '../barraBusqueda.png';
import { Link } from 'react-router-dom';
import stylesbtn from '../Styles/about.module.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav className={styles.pos}>
      <Link to='/' className={styles.dim} >
        <img src={imagen1} className={styles.pos_img}/>
      </Link>
      <SearchBar onSearch={onSearch}/>
      <Link to='/about' className={stylesbtn.ab} >
        <span className={`${stylesbtn.btn}  ${stylesbtn.letra} `}>About</span>
      </Link>
      </nav>
    </div>
  );
};

export default Nav;
