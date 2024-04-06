import React from 'react';
import styles from './header.module.css';
import Nav from '../nav/nav';

const Header = ({ title = "Todo-List" }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Nav />
        </header>
    );
}

export default Header