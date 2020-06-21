import React from 'react';

import classes from './Abilities.module.css';
import Ability from './Ability/Ability';


const Abilities = (props) => (
    <div className={classes.Abilities}>
        {
            props.abilitiesList.map(ability => {
                return (
                    <Ability 
                        key = {ability.id}
                        id = {ability.id}
                        name = {ability.name}
                        icon = {ability.icon}
                        text = {ability.text}
                        refLink = {ability.refLink}
                    />
                )
            })
        }
    </div>
);

export default Abilities;