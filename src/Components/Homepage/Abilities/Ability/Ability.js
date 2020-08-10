import React from 'react';

import classes from './Ability.module.css';

const Ability = (props) => {
    return (
        <div className={classes.Ability}>
            <div className={classes.tooltip}>
                <a href={props.refLink} target="_blank" >
                    <div className={classes.textAndHeaderContainer} style={{width: props.headerContainerWidth}}>
                        <h4>{props.name}</h4>
                        <img src={props.icon} />
                    </div>
                </a>

                <span>Läs mer om {props.name}</span>
            </div>

            <p className={classes.infoText}>{props.text}</p>
        </div>
    )
};

export default Ability;