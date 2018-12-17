import React, { Component } from 'react';

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom";
import api from "../services/api";

class Main extends Component {
    constructor(props) {
        super(props);
        
        const userId = localStorage.getItem('userId');
        if (!userId) {
            props.history.push('/login');
        }
        
        this.state = { 
            appTitle: 'Easy Expand',
            userData: {
                name: '',
                debt: [],
                receiving: []
            },
            allUsers: [],
            
            userLogged: false,
            checked: false,
            
            currentUserId: userId
        };

        this.handleLogin = this.handleLogin.bind(this);

        this.fetchUserData();
        this.getAllUsers();
    }

    handleLogin = loggedUser => {
        this.setState({ userLogged: loggedUser });
    
        localStorage.setItem('userLogged', loggedUser);
    };

    fetchUserData = async () => {
        const response = await api.get('/user/' + this.state.currentUserId);
        this.setState(() => ({
            userData: response.data
        }));
    }

    getAllUsers = async () => {
        const response = await api.get('/user');
        this.setState(() => ({
            allUsers: response.data
        }));
    }

    postTransaction = async (transaction) => {
        await api.post('/transaction', transaction);
        this.fetchUserData();
    }

    render() {
        return (
            <div>
                <Navbar title={this.state.appTitle} userName={this.state.userData.name}/>
                <Container debt={this.state.userData.debt} receiving={this.state.userData.receiving} 
                post={this.postTransaction} allUsers={this.state.allUsers} />
            </div>
        );
    }
}

export default withRouter(Main);
