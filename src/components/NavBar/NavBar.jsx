import React from "react";
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='#3' >News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='#2'  >Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='#1'  >Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
