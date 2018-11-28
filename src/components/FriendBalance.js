import React, { Component } from 'react';

import { Segment, Grid, Divider, Header } from 'semantic-ui-react'
import Avatar from './Avatar';
import UserCard from './UserCard'

/**
 * This component displays the current user's balance with a friend.
 */



class FriendBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userOwned: ['Devem a você', 'Deve a você'],
            userOwns: ['Você deve', 'Você deve']
        }

        const filterExpenses = () => {
            const negative = this.props.expenses.filter(e => e.value.balance < 0)
            const positive = this.props.expenses.filter(e => e.value.balance > 0)
            console.log(negative)
            console.log(positive)
            this.setState({positive})
            console.log(this.state)
        }

        filterExpenses();
        
    }
    

    render() {
        return (
            <Grid columns={2} stackable textAlign='center' padded>
                <Divider vertical />

                <Grid.Row>

                    <Grid.Column>
                        <Header sub>{ this.state.userOwns[0] }</Header>
                        { this.props.expenses.map(
                            exp => <UserCard username={ exp.value.user } value={ exp.value.balance } message={ this.state.userOwns[1] } />
                        ) }
                    </Grid.Column>

                    <Grid.Column>
                        <Header sub>{ this.state.userOwned[0] }</Header>

                        <UserCard username={ this.props.expenses[0].value.user } message={ this.state.userOwned[1] } />
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        );
    }
}



export default FriendBalance;