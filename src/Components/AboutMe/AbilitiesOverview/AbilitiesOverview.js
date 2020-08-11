import React from 'react';

import AbilityItem from './AbilityItem/AbilityItem';
import classes from './AbilitiesOverview.module.css';

const AbilitiesOverview = (props) => {
    return (
        <div className={classes.AbilitiesOverview}>
            <AbilityItem active={true} lastAbilityItem={false}>Kodfärdigheter</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={false}>Digitala verktyg</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={false}>Ideellt arbete</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={false}>Särskilt intressanta kurser</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={true}>Tidigare erfarenheter</AbilityItem>
        </div>
    )
}

export default AbilitiesOverview;