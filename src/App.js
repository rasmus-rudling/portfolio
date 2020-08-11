import React , { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory,
    Redirect
} from "react-router-dom";

import classes from './App.module.css';

// --- PECULIAR COMPONENTS ---
import AboutMe from './Components/AboutMe/AboutMe';
import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import Layout from './Components/Layout/Layout';
// ------------------------

function App() {
  return (
    <Router>
        <Toolbar />

        <Switch>
            <Route exact path="/">
                <Layout>
                    <AboutMe />
                </Layout>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
