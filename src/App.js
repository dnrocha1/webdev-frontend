import React, { Component } from 'react';
import './App.css';

import Container from "./pages/Container";
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>Easy Expend</Navbar>
                {/*<Container/>*/}
            </div>
        );
    }
}

export default App;
