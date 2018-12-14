import React, { Component } from 'react';

import { Grid, Button } from 'semantic-ui-react';

import TotalBalance from "../components/TotalBalance";
import FriendBalance from "../components/FriendBalance";
import Tabs from '../components/Tabs';

class Container extends Component {

    render() {

        const tabOptions = [
            { menuItem: 'Amigos', content: <FriendBalance debt={this.props.debt} receiving={this.props.receiving} /> },
            { menuItem: 'Atividades', content: <span>Atividades</span> }
        ];
        return (
            <div>
                <Grid centered columns={3} stackable>
                
                    <Grid.Column>

                        <TotalBalance debt={this.props.debt} receiving={this.props.receiving} />

                        <div style={{ marginTop:10, marginBottom:10 }}>
                            <Button.Group fluid>
                                <Button color='teal'>Adicionar gastos</Button>
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