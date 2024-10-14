import React from 'react';
import { NavLink } from 'react-router-dom';
import Saidbar from '../SaidBar/Saidbar';
import classes from './Navbar.module.css';


const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile">PROFILE</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/dialogs">MESSAGES</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/news">NEWS</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/music">MUSIC</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/settings">SETTINGS</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/users">USERS</NavLink>
        </div>
        
        <Saidbar/>
    </nav>
}
export default Navbar;

