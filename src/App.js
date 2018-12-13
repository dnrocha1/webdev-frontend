import React, { Component } from 'react';
import './App.css';

import Container from "./pages/Container";
import Navbar from "./components/Navbar";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            transactions : []
        };
    }

    /*componentDidMount() {
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
    }*/

    render() {
        return (
            <div>
                <Navbar title="Easy Expand" />
                <Container />
            </div>
        );
    }
}

export default App;
