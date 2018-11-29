import React, { Component } from 'react';
import './App.css';

import Container from "./pages/Container";
import Navbar from "./components/Navbar";

import api from "./services/api";

class App extends Component {
    constructor() {
        super();

        this.state = { 
            transactions : []
        };
    }

    componentDidMount() {
        this.fetchExpenses();
        this.fetchUsers();
        this.fetchGroups();
    };

    fetchExpenses = async () => {
        const response = await api.get('/transaction');
        console.log(response.data);
        this.setState({ transactions: response.data });
    };

    fetchUsers = async () => {
        const response = await api.get('/user');
        console.log(response.data)
        this.setState({ users: response.data });
    }   

    fetchGroups = async () => {
        const response = await api.get('/group');
        console.log(response.data)
        this.setState({ groups: response.data });
    }

    render() {
        return (
            <div>
                <Navbar title="Easy Expand" />
                <Container transactions={this.state.transactions} />
            </div>
        );
    }
}

export default App;
