import React, { Component } from 'react';

import { Grid, Image, Rail, Segment, Tab, TabPane } from 'semantic-ui-react';

import TotalBalance from "../components/TotalBalance";
import FriendBalance from "../components/FriendBalance";
import Tabs from '../components/Tabs';

import api from "../services/api";

class Container extends Component {

    componentDidMount() {
        this.fetchExpenses();
    };

    fetchExpenses = async () => {
        const response = await api.get('/user');
        console.log(response.data);
    };

    constructor() {
        super();
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
            expenses: friendsExpenses
        }

        

    }
    render() {

        const tabOptions = [
            { menuItem: 'Amigos', content: <FriendBalance expenses={this.state.expenses} /> },
            { menuItem: 'Atividades', content: <span>Atividades</span> }
        ];
        
        return (
            <div>
                {/*<Grid centered columns={3}>
                    <Grid.Column>
                        <Segment>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            <p>Another content</p>
                            <Rail dividing position='left'>
                                <Segment>Left Content</Segment>
                            </Rail>
                            
                        </Segment>
                    </Grid.Column>
                </Grid>*/}
                
                
                <Grid centered columns={3}>
                
                    <Grid.Column>

                        <TotalBalance />

                        <Tabs tabs={tabOptions}/>
                    
                        {/*<div className="friendBalance">
                            {this.state.expenses.map(
                                friendExp => <Segment><FriendBalance key={friendExp.key} expense={friendExp.value}/></Segment>
                            )}
                        </div>*/}
                    </Grid.Column>

                </Grid>

            </div>
        );
    }
}

export default Container;