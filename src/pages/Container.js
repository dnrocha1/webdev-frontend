import React, { Component } from 'react';

import { Grid, Image, Rail, Segment, Tab, TabPane } from 'semantic-ui-react';

import Balance from "../components/Balance";
import FriendBalance from "../components/FriendBalance";
import Tabs from '../components/Tabs';

class Container extends Component {
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

        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
        ];

    }
    render() {
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
                        <Balance/>

                        <Tabs>
                            asdf
                        </Tabs>

                        <div className="friendBalance">
                            {this.state.expenses.map(
                                friendExp => <Segment><FriendBalance key={friendExp.key} expense={friendExp.value}/></Segment>
                            )}
                        </div>
                    </Grid.Column>

                </Grid>

            </div>
        );
    }
}

export default Container;