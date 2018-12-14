import React, { Component } from 'react';
import './App.css';

import Container from "./pages/Container";
import Navbar from "./components/Navbar";

import api from "./services/api";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            userData: {
                debt: [],
                receiving: []
            },
            currentUserId: '5c11b591802ea7021dbc086c',
        };

        this.fetchUserData();
    }

    fetchUserData = async () => {
        const response = await api.get('/user/' + this.state.currentUserId);
        this.setState(() => ({
            userData: response.data
        }));
    }

    render() {
        return (
            <div>
                <Navbar title="Easy Expand" />
                <Container debt={this.state.userData.debt} receiving={this.state.userData.receiving} />
            </div>
        );
    }
}

export default App;
