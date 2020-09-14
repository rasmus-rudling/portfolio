import React from 'react';

import classes from './Ability.module.css';

import wikiLogo from '../../../../../Resources/wikipedia.png';

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

                <span className={classes.readMore}>
                    <img src={wikiLogo} />
                    Läs mer om {props.name}
                </span>
            </div>

            <p>{props.text}</p>
        </div>
    )
};

export default Ability;