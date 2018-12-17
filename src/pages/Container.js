import React, { Component } from 'react';

import { Grid, Button } from 'semantic-ui-react';

import TotalBalance from "../components/TotalBalance";
import FriendBalance from "../components/FriendBalance";
import Tabs from '../components/Tabs';
import ModalTransaction from "../components/ModalTransaction";
class Container extends Component {

    state = { modalCtrl: true }

    show = () => this.setState({ modalCtrl: true })
    close = () => this.setState({ modalCtrl: false })

    render() {
        const { modalCtrl } = this.state
        const tabOptions = [
            { menuItem: 'Amigos', content: <FriendBalance debt={this.props.debt} receiving={this.props.receiving} /> },
            { menuItem: 'Atividades', content: <span>Atividades</span> }
        ];
        return (
            <div>
                <ModalTransaction open={modalCtrl} close={this.close} 
                post={this.props.post} allUsers={this.props.allUsers}/>

                <Grid centered columns={3} stackable>
                
                    <Grid.Column>

                        <TotalBalance debt={this.props.debt} receiving={this.props.receiving} />

                        <div style={{ marginTop:10, marginBottom:10 }}>
                            <Button.Group fluid>
                                <Button color='teal' onClick={ this.show }>Adicionar despesa</Button>
                                <Button color='orange'>Quitar gastos</Button>
                            </Button.Group>
                        </div>

                        <Tabs tabs={tabOptions}/>
                    
                    </Grid.Column>

                </Grid>
            </div>
        );
    }
}

export default Container;