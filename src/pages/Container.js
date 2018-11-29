import React, { Component } from 'react';

import { Grid, Button } from 'semantic-ui-react';

import TotalBalance from "../components/TotalBalance";
import FriendBalance from "../components/FriendBalance";
import Tabs from '../components/Tabs';


class Container extends Component {

    

    constructor(props) {
        super(props);
        const friendsExpenses = [
            {"key":1,
             "value": {
                user: "jeff",
                balance: 51.50
                }
            },
            {"key":2,
            "value": {
                user: "lorena",
                balance: 10.00
                }
            },
            {"key": 3,
            "value":{
                user: "rafael",
                balance: -7.50
                }
            }
        ]

        this.state = {
            expenses: friendsExpenses,
            transactions: []
        }

        

        
    }

    render() {

        const tabOptions = [
            { menuItem: 'Amigos', content: <FriendBalance expenses={this.state.expenses} /> },
            { menuItem: 'Atividades', content: <span>Atividades</span> }
        ];
        return (
            <div>
                <Grid centered columns={3} stackable>
                
                    <Grid.Column>

                        <TotalBalance />

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