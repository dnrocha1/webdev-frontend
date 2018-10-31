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
                <div>
                    {expense.user} : {expense.balance}
                </div>
                <br/>
            </div>
        );
    }
}

export default FriendBalance;