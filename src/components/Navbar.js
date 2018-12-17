import React, { Component } from 'react';

import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import Avatar from './Avatar'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeItem: 'home',
            currentUsername: 'Daniyel Rocha'
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    signOut = () => {
        localStorage.clear();
        this.props.history.push('/login');
    }

    render() {

        return (
            <Menu stackable borderless color='teal' inverted size='huge'>

                <Menu.Item>
                    <strong>{ this.props.title }</strong>
                </Menu.Item>

                <Menu.Menu position='right'>

                    {/*<Dropdown item icon="add" pointing="top left">
                        <Dropdown.Menu>
                            <Dropdown.Item text="Nova despesa" icon="usd"/>
                        </Dropdown.Menu>
                    </Dropdown>*/}

                    <Dropdown item icon={null}>
                        <Icon.Group>
                            <Icon name="bell outline" />
                            <Icon name="circle" color="red" corner />
                        </Icon.Group>
                    </Dropdown>
                
                    <Dropdown item trigger={<Avatar size="30">{this.props.userName}</Avatar>} pointing='top right' icon={null} style={{ marginRight:30 }}>
                        <Dropdown.Menu>
                            <Dropdown.Item disabled>
                                <span> Entrou como <strong>{this.props.userName}</strong></span>
                            </Dropdown.Item>
                            {/*<Dropdown.Item text="Realizar ALGUMA COISA" icon="usd" />
                            <Dropdown.Item text="Adicionar amigos" icon="add user" />*/}
                            <Dropdown.Item text="Sair" icon="sign out" onClick={this.signOut} />
                        </Dropdown.Menu>
                    </Dropdown>

                </Menu.Menu>
            </Menu>
        );
    }
}

export default withRouter(Navbar);