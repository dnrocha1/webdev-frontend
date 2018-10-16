import React, { Component } from 'react';

/**
 * This component displays the current user's balance with a friend.
 */
class FriendBalance extends Component {
    constructor() {
        super();
    }

    render() {
        const expense = this.props.expense;
        console.log(expense)
        return (
            <div align="center">
                <div className="expense">
                    <span className="user">{expense.user}</span>
                    <br/>
                    <span className="balance">{expense.balance}</span>
                </div>
                <br/>
            </div>
        );
    }
}

export default FriendBalance;