import React from 'react';

import AbilityItem from './AbilityItem/AbilityItem';
import classes from './AbilitiesOverview.module.css';

const AbilitiesOverview = (props) => {
    return (
        <div className={classes.AbilitiesOverview}>
            <AbilityItem active={true} lastAbilityItem={false} scrollToId={"scrollTo1"}>Kodfärdigheter</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={false} scrollToId={"scrollTo2"}>Digitala verktyg</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={false} scrollToId={"scrollTo3"}>Ideellt arbete</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={false} scrollToId={"scrollTo4"}>Särskilt intressanta kurser</AbilityItem>
            <AbilityItem active={false} lastAbilityItem={true} scrollToId={"scrollTo5"}>Tidigare erfarenheter</AbilityItem>
        </div>
    )
}

export default AbilitiesOverview;