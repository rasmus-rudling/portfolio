import React, { useState } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [showSidedrawer, setShowSidedrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSidedrawer(false);
    }

    return (
        <div>
            <Toolbar />
            <SideDrawer 
                open={showSidedrawer} 
                closed={sideDrawerClosedHandler} 
            />
            
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;