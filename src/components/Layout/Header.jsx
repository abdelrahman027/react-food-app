import React from 'react';
import MealsImg from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Delicious Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImg} alt="meals" />
            </div>
        </React.Fragment>)
};


export default Header;