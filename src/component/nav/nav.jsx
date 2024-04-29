import React from "react";
import style from './Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className={style.menu}>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/listtodo">List Todo</Link>
            <Link to="/tarifes">Tarifes</Link>
            <Link to="/news">News</Link>
        </div>
    )
}

export default Nav