import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import LoginPage from "./pages/Login";
import Main from "./pages/Main";

import api from "./services/api";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            userData: {
                debt: [],
                receiving: []
            },
            allUsers: [],
            
            userLogged: false,
            checked: false,
            
            currentUserId: '5c11b591802ea7021dbc086c',
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
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main} exact={true} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
                
                {/*<Container debt={this.state.userData.debt} receiving={this.state.userData.receiving} 
                post={this.postTransaction} allUsers={this.state.allUsers} />*/}
                
                {/*<Main debt={this.state.userData.debt} receiving={this.state.userData.receiving} 
                post={this.postTransaction} allUsers={this.state.allUsers} />

                <Login />*/}
            </BrowserRouter>
        );
    }
}

export default App;
