import React, { Component } from 'react';

import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import Avatar from './Avatar'

export default class Navbar extends Component {
    state = { 
        activeItem: 'home',
        currentUsername: 'Daniyel Rocha'
    };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu stackable borderless color='teal' inverted size='huge'>

                {/*<Menu.Item name='title' /*active={activeItem === 'title'} onClick={this.handleItemClick} >
                    <strong>{ this.props.children }</strong>
                </Menu.Item>*/}

                <Menu.Item /*active={activeItem === 'title'}*/ onClick={this.handleItemClick}>
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
                
                    <Dropdown item trigger={<Avatar size="30">{this.state.currentUsername}</Avatar>} pointing='top right' icon={null}>
                        <Dropdown.Menu>
                            <Dropdown.Item disabled>
                                <span> Entrou como <strong>{this.state.currentUsername}</strong></span>
                            </Dropdown.Item>
                            <Dropdown.Item text="Realizar ALGUMA COISA" icon="usd" />
                            <Dropdown.Item text="Adicionar amigos" icon="add user" />
                            <Dropdown.Item text="Sair" icon="sign out" />
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item></Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}