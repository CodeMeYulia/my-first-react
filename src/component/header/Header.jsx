import React from 'react';
import styles from './header.module.css';

const Header = ({ title = "Todo-List" }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header