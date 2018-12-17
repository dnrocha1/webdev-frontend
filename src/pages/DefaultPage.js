import React, { Component } from 'react';

import { Grid, Header, Segment, Message, Icon } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class DefaultPage extends Component {

    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        return (
            <div>
                <Grid verticalAlign='middle' centered style={{ height: '75vh' }}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            {this.state.loginFailed && <Message icon='lock' header='Login falhou!' 
                            content='Verifique as informações e tente novamente.' color='red' /> }
                            <Segment placeholder>
                                <Header icon as='h1'>
                                    <Icon name='search' />
                                    <Header.Subheader>Página não encontrada</Header.Subheader>
                                </Header>
                            </Segment>

                            <Message attached='bottom' warning>
                                <Icon name='help' />
                                Não possui conta? Cadastre-se <a href='/signup'>aqui</a>!
                                Ou faça o login <a href='/login'>aqui.</a>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default withRouter(DefaultPage);