import React from 'react';
import classes from './AbilityItem.module.css';

// let abilityActive = true;

const AbilityItem = (props) => {

    let bulletClass = props.active ? classes.activeBullet : classes.normalBullet;
    let lineClass = props.active ? classes.activeLine : classes.normalLine;
    let textClass = props.active ? classes.activeText : classes.normalText;

    lineClass = props.lastAbilityItem ? null : lineClass;

    return (
        <div 
            className={classes.AbilityItem}
            onClick={() => {
                let scrollToElement = document.querySelector("#" + props.scrollToId);
                let yOffset = -70;
                let y = scrollToElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});
            }}
        >
            <div className={classes.bulletAndTextContainer}>
                <div className={bulletClass} />
                <div className={textClass}>{props.children}</div>
            </div>
            
            <div className={lineClass} />
        </div>
    )
}

export default AbilityItem;