import React from 'react';

import classes from './Ability.module.css';

const Ability = (props) => {

    // let classForAbility;

    // const isOddOrderedAbility = props.id % 2 === 0;

    // if (isOddOrderedAbility) {
    //     classForAbility = classes.AbilityOdd;
    // } else {
    //     classForAbility = classes.AbilityEven;
    // }
    
    return (
        <div className={classes.Ability}>
            <div className={classes.tooltip}>
                <a href={props.refLink} target="_blank" >
                    <div className={classes.textAndHeaderContainer} style={{width: props.headerContainerWidth}}>
                        <h3>{props.name}</h3>
                        <img src={props.icon} />
                    </div>
                </a>

                <span>Läs mer om {props.name}</span>
            </div>
            <p style={{width: props.textWidth}}>{props.text}</p>
        </div>
    )
};

export default Ability;