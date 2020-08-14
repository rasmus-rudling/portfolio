import React from 'react';
import classes from './AbilityItem.module.css';

// let abilityActive = true;

const AbilityItem = (props) => {
    let bulletClass, lineClass, textClass;
    let activeAbility = props.scrollMin <= props.yScroll && props.yScroll <= props.scrollMax;

    if (activeAbility) {
        bulletClass = classes.activeBullet;
        lineClass = classes.activeLine;
        textClass = classes.activeText;
    } else {
        bulletClass = classes.normalBullet;
        lineClass = classes.normalLine;
        textClass = classes.normalText;
    }
    

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