import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import usaFlag from '../../../Resources/usaFlag.jpg';
import swedenFlag from '../../../Resources/swedenFlag.png';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/" active>Hem</NavigationItem> */}
        <NavigationItem link="/">Fotografier</NavigationItem>
        <NavigationItem link="/">Filmer</NavigationItem>
        <NavigationItem link="/">Kodprojekt</NavigationItem>
        <NavigationItem link="/">Om mig</NavigationItem>
        <NavigationItem link="/">Kontakt</NavigationItem>
        <li className={classes.translateButton}>EN</li>
        {/* <img src={usaFlag} /> */}
    </ul>
);


export default NavigationItems;