import React, { Component } from 'react';

import { Grid, Header } from 'semantic-ui-react'
import UserCard from './UserCard'

/**
 * This component displays the current user's balance with a friend.
 */

class FriendBalance extends Component {

    getDebts = (data) => {
        console.log(data)
        const aux = data.map(exp => {
            let obj = {};
            obj.transaction = exp._id
            obj.user = exp.paidByUser
            obj.val = exp.totalAmount/(exp.transactionMembers.length+1)
            return obj;
        }                                                           
        );

        const usersMap = {};

        aux.forEach(debt => {
            const user = usersMap[debt.user._id];
            if (!user) {
                const userInfo = Object.assign({}, debt.user);
                userInfo.transactions = [debt.transaction];
                userInfo.totalDebt = debt.val;
                usersMap[debt.user._id] = userInfo;
            } else {
                user.transactions = [...user.transactions, debt.transaction];
                user.totalDebt += debt.val;
            }
        });

        const debts = Object.values(usersMap).map(v => v);
        //this.setState({ debts: debts });
        return debts
    }

    getReceivings = (data) => {
        const aux = data.map(exp => {
            return exp.transactionMembers.map(member => {
                let obj = {};
                obj.transaction = exp._id;
                obj.user = member.user;
                obj.val = member.userAmount
                return obj;
            });
        });
        
        const flatten = arr => arr.reduce(
            (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
        );

        const usersMap = {};

        flatten(aux).forEach(receive => {
            const user = usersMap[receive.user._id];
            if (!user) {
                const userInfo = Object.assign({}, receive.user);
                userInfo.transactions = [receive.transaction];
                userInfo.totalReceiving = receive.val;
                usersMap[receive.user._id] = userInfo;
            } else {
                user.transactions = [...user.transactions, receive.transaction];
                user.totalReceiving += receive.val;
            }
        });

        const receivings = Object.values(usersMap).map(v => v);
        //this.setState({ receivings: receivings });
        return receivings;
    }


    render() {
        return (
            <Grid columns={2} divided stackable textAlign='center' padded>

                <Grid.Row>

                    <Grid.Column>
                        <Header sub>Você deve</Header>
                        { this.getDebts(this.props.debt) && this.getDebts(this.props.debt).map(
                            debt => <UserCard key={debt._id} username={ debt.name } value={ debt.totalDebt } message="Você deve" />
                        ) }
                    </Grid.Column>

                    <Grid.Column>
                        <Header sub>Devem a você</Header>
                        { this.getReceivings(this.props.receiving) && this.getReceivings(this.props.receiving).map(
                            receiving => <UserCard key={receiving._id} username={ receiving.name } value={ receiving.totalReceiving } message="Deve a você" />
                        ) }
                    </Grid.Column>

                </Grid.Row>

            </Grid>
        );
    }
}



export default FriendBalance;