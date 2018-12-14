import React from 'react';

import { Statistic, Icon, Segment } from 'semantic-ui-react';

/**
 * This component displays the user balance.
 */
const TotalBalance = props => {

    const getBalance = ({debt, receiving} = {}) => {
        debt = getDebts(debt).reduce((acc, elem) => acc + elem.totalDebt, 0);
        receiving = getReceivings(receiving).reduce((acc, elem) => acc + elem.totalReceiving, 0);
        return receiving - debt;
    }

    const getDebts = (data) => {
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

    const getReceivings = (data) => {
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

    return (
        <Segment /*tertiary*/>

            <Statistic.Group widths='one'>
                <Statistic>
                    <Statistic.Value>
                        <Icon name="usd" />
                        {/*<span style={{color:'red'}}>500,00</span>*/}
                        { Math.abs(getBalance(props)) }
                    </Statistic.Value>
                    <Statistic.Label>{ getBalance(props) > 0 ? 'a receber' : 'devendo' }</Statistic.Label>
                </Statistic>
            </Statistic.Group>

        </Segment>
    );
    
}

export default TotalBalance;