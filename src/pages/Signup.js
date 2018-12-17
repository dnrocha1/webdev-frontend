import React, { Component } from 'react';

import { Grid, Header, Segment, Form, Button, Message, Icon } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import api from "../services/api";


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signupFailed: false
        }
    }
    
    handleSignup = async (e) => {
        const { name, email, password, confirmpswd } = this.state;
        if (password !== confirmpswd) {
            this.setState({signupFailed: true});
        } else if (password === confirmpswd) {
            try {
                const data = { name, email, password };
                await api.post('/user', data)
                this.props.history.push('/login');  
            } catch(exception) {
                this.setState({signupFailed: true});
            }
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
                        {this.state.signupFailed && <Message icon='exclamation' header='Cadastro falhou!' 
                        content='Verifique as informações e tente novamente.' color='red' /> }
                        <Segment>
                            <Header as="h2">Cadastre-se</Header>
                            <Form>
                                <Form.Field>
                                    <label>Nome</label>
                                    <input name='name' placeholder="Informe seu nome" onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label>E-mail</label>
                                    <input name='email' placeholder="Informe seu e-mail" onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Senha</label>
                                    <input name='password' type='password' placeholder="Informe a senha" onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Confirme a senha</label>
                                    <input name='confirmpswd' type='password' placeholder="Informe a senha novamente" onChange={this.handleChange} />
                                </Form.Field>
                                <Button positive fluid onClick={this.handleSignup}>Cadastrar</Button>
                            </Form>
                        </Segment>
                        <Message attached='bottom' warning>
                            <Icon name='help' />
                            Já é cadastrado? Faça seu login <a href='/login'>aqui</a>!
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        );
    }
}

export default withRouter(Signup);