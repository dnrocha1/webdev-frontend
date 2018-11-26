import React, { Component } from 'react';

/**
 * This component displays the current user's balance with a friend.
 */
class FriendBalance extends Component {
    /*constructor() {
        super();
    }*/
    
    render() {
        const expense = this.props.expense;
        console.log(expense)
        return (
            <div align="center">
                {expense.user} : {expense.balance}
            </div>
        );
    }
}

export default FriendBalance;