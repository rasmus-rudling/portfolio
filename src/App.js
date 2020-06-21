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
import Homepage from './Components/Homepage/Homepage';
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
                    <Homepage />
                </Layout>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
