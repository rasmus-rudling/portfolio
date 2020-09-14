import React, {useState, useEffect} from 'react';

import AbilityItem from './AbilityItem/AbilityItem';
import classes from './AbilitiesOverview.module.css';

const startAbilityItems = [
    {
        abilityName: "Kodfärdigheter",
        active: true,
        lastAbilityItem: false,
        scrollToId: "scrollTo1",
        scrollMin: 0,
        scrollMax: 1230
    },
    {
        abilityName: "Digitala verktyg",
        active: false,
        lastAbilityItem: false,
        scrollToId: "scrollTo2",
        scrollMin: 1230,
        scrollMax: 2270
    },
    {
        abilityName: "Ideellt arbete",
        active: false,
        lastAbilityItem: false,
        scrollToId: "scrollTo3",
        scrollMin: 2270,
        scrollMax: 2630
    },
    {
        abilityName: "Särskilt intressanta kurser",
        active: false,
        lastAbilityItem: false,
        scrollToId: "scrollTo4",
        scrollMin: 2630,
        scrollMax: 2700
    },
    {
        abilityName: "Tidigare erfarenheter",
        active: false,
        lastAbilityItem: true,
        scrollToId: "scrollTo5",
        scrollMin: 2700,
        scrollMax: 3000
    },
]

const AbilitiesOverview = (props) => {
    const [abilityItems, setAbilityItems] = useState(startAbilityItems);
    const [yScroll, setYScroll] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            setYScroll(window.scrollY);
            console.log(Math.round(window.scrollY));
        });
    }, []);

    let overViewTopPosition;
    const topLimit = 250;

    if (yScroll < topLimit) {
        overViewTopPosition = 342 - yScroll + "px"
    } else {
        overViewTopPosition = 342 - topLimit + "px"
    }

    return (
        <div 
            className={classes.AbilitiesOverview}
            style = {{
                top: overViewTopPosition
            }}>
            {
                abilityItems.map(abilityObject => {
                    return (
                        <AbilityItem 
                            // active = {abilityObject.active}
                            lastAbilityItem = {abilityObject.lastAbilityItem}
                            scrollToId = {abilityObject.scrollToId}
                            scrollMin = {abilityObject.scrollMin}
                            scrollMax = {abilityObject.scrollMax}
                            yScroll = {yScroll}
                        >{abilityObject.abilityName}</AbilityItem>
                    )
                })
            }
        </div>
    )
}

export default AbilitiesOverview;