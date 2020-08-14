import React from 'react';
import classes from './AboutMe.module.css';
import '../Common/Typography.css';

import pictureAtRasmus from '../../Resources/rasmus2.png';

// --- Components ---
import AbilitiesOverview from './AbilitiesOverview/AbilitiesOverview';
import AbilitiesContainer from './AbilitiesContainer/AbilitiesContainer';

const AboutMe = props => {

    return (
        <div className={classes.Homepage}>
            <div className = {classes.aboutMe}>
                <img src={pictureAtRasmus} className={classes.profilePicture} />

                <div className={classes.textContainer}>
                    <h3>Hej och välkommen till min hemsida!</h3>
                    <p>
                        Jag heter Rasmus Rudling och är 22 år gammal. Här kan du läsa om de äventyr jag varit med om och vad dessa har gett mig. Ett område jag verkligen brinner för och vill utvecklas mer inom är programmering. Två andra områden jag engagerar mig inom är ledarskap och fotografering.
                    </p>
                </div>
            </div>

            <AbilitiesOverview />
            
            <AbilitiesContainer />
        </div>
    )
}

export default AboutMe;