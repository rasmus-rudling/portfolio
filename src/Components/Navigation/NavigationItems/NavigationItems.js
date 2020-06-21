import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/" active>Hem</NavigationItem> */}
        <NavigationItem link="/">Projekt</NavigationItem>
        <NavigationItem link="/">Om mig</NavigationItem>
        <NavigationItem link="/">Kontakt</NavigationItem>
    </ul>
);


export default NavigationItems;