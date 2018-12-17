import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import LoginPage from "./pages/Login";
import Signup from './pages/Signup';
import Main from "./pages/Main";
import DefaultPage from './pages/DefaultPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main} exact={true} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
            <Route component={DefaultPage} />
        </Switch>
    </BrowserRouter>
);

export default App;
