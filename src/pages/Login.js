import React, { Component } from 'react';

import { Grid, Header, Segment, Form, Button, Message, Icon } from 'semantic-ui-react';
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
                        {this.state.loginFailed && <Message icon='lock' header='Login falhou!' 
                        content='Verifique as informações e tente novamente.' color='red' /> }
                        <Segment>
                            <Header as="h2">Login</Header>
                            <Form>
                                <Form.Field>
                                    <label>E-mail</label>
                                    <input name='email' placeholder="Informe seu e-mail" onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Senha</label>
                                    <input name='password' type='password' placeholder="Informe a senha" onChange={this.handleChange} />
                                </Form.Field>
                                <Button positive fluid onClick={this.handleLogin}>Login</Button>
                            </Form>
                        </Segment>
                        <Message attached='bottom' warning>
                            <Icon name='help' />
                            Não possui conta? Cadastre-se <a href='/signup'>aqui</a>!
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        );
    }
}

export default withRouter(LoginPage);