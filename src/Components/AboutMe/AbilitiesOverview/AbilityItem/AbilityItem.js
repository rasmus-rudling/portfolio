import React from 'react';
import classes from './AbilityItem.module.css';

// let abilityActive = true;

const AbilityItem = (props) => {

    let bulletClass = props.active ? classes.activeBullet : classes.normalBullet;
    let lineClass = props.active ? classes.activeLine : classes.normalLine;
    let textClass = props.active ? classes.activeText : classes.normalText;

    lineClass = props.lastAbilityItem ? null : lineClass;

    return (
        <div className={classes.AbilityItem}>
            <div className={classes.bulletAndTextContainer}>
                <div className={bulletClass} />
                <div className={textClass}>{props.children}</div>
            </div>
            
            <div className={lineClass} />
        </div>
    )
}

export default AbilityItem;