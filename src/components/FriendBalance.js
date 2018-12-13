import React, { Component } from 'react';

import { Grid, Divider, Header } from 'semantic-ui-react'
import UserCard from './UserCard'

import api from "../services/api";

/**
 * This component displays the current user's balance with a friend.
 */

class FriendBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*userOwned: ['Devem a você', 'Deve a você'],
            userOwns: ['Você deve', 'Você deve']*/
            currentUserId: '5c11b591802ea7021dbc086c',
            userData: {}
        }

        this.fetchUserData();
    }

    fetchUserData = async () => {
        const response = await api.get('/user/' + this.state.currentUserId);
        //console.log(response.data)
        this.setState({ userData: response.data });
        this.getDebts(response.data);
        this.getReceivings(response.data);
    }

    getDebts = (data) => {
        const aux = data.debt.map(exp => {
            let obj = {};
            obj.transaction = exp._id
            obj.user = exp.paidByUser
            obj.val = exp.totalAmount/(exp.transactionMembers.length+1)
            return obj;
        }                                                           
        );
        console.log(aux)

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
        this.setState({ debts: debts });
    }

    getReceivings = (data) => {
        const aux = data.receiving.map(exp => {
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
        this.setState({ receivings: receivings });
    }


    render() {
        return (
            <Grid columns={2} stackable textAlign='center' padded>
                <Divider vertical />

                <Grid.Row>

                    <Grid.Column>
                        <Header sub>Você deve</Header>
                        { this.state.debts && this.state.debts.map(
                            debt => <UserCard username={ debt.name } value={ debt.totalDebt } message="Você deve" />
                        ) }
                    </Grid.Column>

                    <Grid.Column>
                        <Header sub>Devem a você</Header>
                        { this.state.receivings && this.state.receivings.map(
                            receiving => <UserCard username={ receiving.name } value={ receiving.totalReceiving } message="Deve a você" />
                        ) }
                    </Grid.Column>

                </Grid.Row>

            </Grid>
        );
    }
}



export default FriendBalance;