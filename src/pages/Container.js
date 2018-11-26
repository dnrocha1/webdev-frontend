import React, { Component } from 'react';

import { Grid, Image, Rail, Segment } from 'semantic-ui-react';

import Balance from "../components/Balance";
import FriendBalance from "../components/FriendBalance";

class Container extends Component {
    constructor() {
        super();

        const friendsExpenses = [
            {
                user: "jeff",
                balance: 51.50
            },
            {
                user: "lorena",
                balance: 10.00
            },
            {
                user: "rafael",
                balance: -7.50
            }
        ]

        this.state = {
            expenses: friendsExpenses
        }
    }
    render() {
        return (
            <div>
                <Grid centered columns={3}>
                    <Grid.Column>
                        <Segment>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            <p>Another content</p>
                            <Rail dividing position='left'>
                                <Segment>Left Content</Segment>
                            </Rail>
                            
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Balance/>
                <div className="friendBalance">
                    {this.state.expenses.map(
                        friendExp => <FriendBalance expense={friendExp}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Container;