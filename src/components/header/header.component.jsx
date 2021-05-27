import React from 'react';
import reactDom from 'react-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
const Header = () => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/'>DASHBOARD</Link>
            <Link className="option" to='/tasks'>TASKS</Link>
            
        </div>
    </div>
)
export default Header