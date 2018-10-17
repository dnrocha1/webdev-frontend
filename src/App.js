import React, { Component } from 'react';
import './App.css';

import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>Easy Expend</Navbar>
                <Feed/>
            </div>
        );
    }
}

export default App;
