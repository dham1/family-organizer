import React from 'react';
import reactDom from 'react-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/'>DASHBOARD</Link>
            <Link className="option" to='/tasks'>TASKS</Link>
            <Link>
                {
                    currentUser ? (
                        < div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) : (
                        <Link className="option" to='/signin'>
                            SIGN IN
                        </Link>)
                }
            </Link>
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div >
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);