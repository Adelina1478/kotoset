import React from 'react';
import { NavLink } from 'react-router-dom';
import head from './Header.module.css';

const Header = (props) => {
    return <header className={head.header}>
        <img src='https://svgsilh.com/svg_v2/1484725.svg' />

        <div className={head.loginBlock}>
            {props.isAuth ? <div>{props.login}<button onClick={props.logout}>Logout</button></div>
            
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}
export default Header;
