import React, { Component } from 'react';

import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import api from "../services/api";


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginFailed: false
        }
    }
    
    handleLogin = async (e) => {
        try {
            const response = await api.post('/auth', this.state );
            console.log(response)
            const { token, userId } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            this.props.history.push('/');
        } catch(e) { 
            this.setState({loginFailed: true})
        }
    }

    handleChange = (event) => {
        this.setState( {[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
            <Grid verticalAlign='middle' centered style={{ height: '75vh' }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Segment>
                            <Header as="h2">Login</Header>
                            <Form>
                                <Form.Field>
                                    <label>E-mail</label>
                                    <input name='email' placeholder="Informe seu E-mail" onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Senha</label>
                                    <input name='password' type='password' placeholder="Senha" onChange={this.handleChange} />
                                </Form.Field>
                                <Button positive onClick={this.handleLogin}>Submit</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {this.state.loginFailed && <p style={{ color: 'red'}}>Login Falhou</p>}
            </div>
        );
    }
}

export default withRouter(LoginPage);