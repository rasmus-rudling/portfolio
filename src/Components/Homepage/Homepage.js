import React from 'react';
import classes from './Homepage.module.css';

import pictureAtRasmus from '../../Resources/Rasmus3.png';

// --- ICONS IMPORT ---
import htmlIcon from '../../Resources/html.png';
import cssIcon from '../../Resources/css.png';
import javaScriptIcon from '../../Resources/javaScript.png';
import pythonIcon from '../../Resources/python.png';
import javaIcon from '../../Resources/java.png';
import reactIcon from '../../Resources/react.png';
import gitIcon from '../../Resources/git.png';
import githubIcon from '../../Resources/gitHub.png';

import squareSpaceIcon from '../../Resources/squarespace.png';
import photoshopIcon from '../../Resources/photoshop.png';
import afterEffectsIcon from '../../Resources/afterEffects.png';
import premiereProIcon from '../../Resources/premierePro.png';

import medieteknikIcon from '../../Resources/medieteknik.png';
// --------------------

import Abilities from './Abilities/Abilities';

const programmingSkills = [
    {
        id: 0,
        name: 'HTML',
        icon: htmlIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/HTML'
    }, 
    {
        id: 1,
        name: 'CSS',
        icon: cssIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
    },
    {
        id: 2,
        name: 'JavaScript',
        icon: javaScriptIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
        id: 3,
        name: 'React',
        icon: reactIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/React_(web_framework)'
    },
    {
        id: 4,
        name: 'Python',
        icon: pythonIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    {
        id: 5,
        name: 'Java',
        icon: javaIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
    },
    {
        id: 6,
        name: 'Git',
        icon: gitIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Git'
    },
    {
        id: 7,
        name: 'GitHub',
        icon: githubIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/GitHub'
    },
];

const otherAbilities = [
    {
        id: 0,
        name: 'Squarespace',
        icon: squareSpaceIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Squarespace'
    },
    {
        id: 1,
        name: 'Photoshop',
        icon: photoshopIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Adobe_Photoshop'
    },
    {
        id: 2,
        name: 'After Effects',
        icon: afterEffectsIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Adobe_After_Effects'
    }, 
    {
        id: 3,
        name: 'Premiere Pro',
        icon: premiereProIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'https://en.wikipedia.org/wiki/Adobe_Premiere_Pro'
    }, 
];

const volunteeringExperiences = [
    {
        id: 0,
        name: 'Front-end utvecklare',
        icon: medieteknikIcon,
        text: "Jag har under många års tid skapat hemsidor av varierande karaktär och har därför exponerats mycket för HTML.",
        refLink: 'http://www.medieteknik.com/'
    },
];

const Homepage = props => {

    return (
        <React.Fragment>
            <div className = {classes.aboutMe}>
                <img src={pictureAtRasmus} className={classes.profilePicture} />

                <div className={classes.textContainer}>
                    <h3>Hej och välkommen till min hemsida!</h3>
                    <p>
                        Jag heter Rasmus Rudling, är 22 år gammal och brinner för programmering i alla dess former. Jag har goda kunskaper
                        i <em>Java</em> och <em>Python</em>. I <em>JavaScript</em> känner jag mig som mest bekväm och är också det
                        språk jag vill fortsätta att utvecklas inom. 
                    </p>
                </div>
            </div>

            <h2>Programmeringskunskaper</h2>
            <div className = {classes.aboutMeContainer}>
                <p>
                    Programmering är ett område som jag verkligen brinner för och vill utvecklas mer inom. Nedan listas de områden
                    jag jobbat mest med.
                </p>

                <Abilities 
                    abilitiesList = {programmingSkills}
                    headerContainerWidth = "175px"
                    textWidth = "76%"
                />
            </div>

            <h2>Digitala verktyg</h2>
            <div className = {classes.aboutMeContainer}>
                <p>
                    Utöver programmeringen har jag jobbat med en hel del digitala verktyg. De verktyg jag använt mig mest av
                    listas nedan. Jag önskar inte jobba mer med dessa digitala verktyg, utan vill istället fortsätta att 
                    fokusera på programmering. Att jobba med dessa verktyg har däremot gett mig en ökad förståelse 
                    för användarbeteenden, vilket kommer till användning när jag själv skapar digitala verktyg åt andra.
                </p>

                <Abilities 
                    abilitiesList = {otherAbilities}
                    headerContainerWidth = "175px"
                    textWidth = "76%"
                />
            </div>

            <h2>Ideellt arbete</h2>
            <div className = {classes.aboutMeContainer}>
                <p>
                    Utöver programmeringen har jag jobbat med en hel del digitala verktyg. De verktyg jag använt mig mest av
                    listas nedan. Jag önskar inte jobba mer med dessa digitala verktyg, utan vill istället fortsätta att 
                    fokusera på programmering. Att jobba med dessa verktyg har däremot gett mig en ökad förståelse 
                    för användarbeteenden, vilket kommer till användning när jag själv skapar digitala verktyg åt andra.
                </p>

                <Abilities 
                    abilitiesList = {volunteeringExperiences}
                    headerContainerWidth = "250px"
                    textWidth = "66%"
                />
            </div>

            <h2>Särskilt intressanta kurser</h2>

            <h2>Tidigare erfarenheter</h2>
        </React.Fragment>
        
    )
}

export default Homepage;