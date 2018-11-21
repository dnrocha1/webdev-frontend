import React, { Component } from 'react';

import { Menu, Dropdown } from 'semantic-ui-react';

export default class Navbar extends Component {
    state = { activeItem: 'home'};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu color='teal' inverted size='huge'>
                <Menu.Item name='title' active={activeItem === 'title'} onClick={this.handleItemClick}>
                { this.props.children }
                </Menu.Item>
                
                <Menu.Menu position='right'>
                    <Dropdown item text='Adicionais'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Perfil</Dropdown.Item>
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item></Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}