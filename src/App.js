import React, { Component } from 'react';
import './App.css';

import Panel from "./pages/Panel";
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>Easy Expend</Navbar>
                <Panel/>
            </div>
        );
    }
}

export default App;
