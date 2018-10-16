import React, { Component } from 'react';

import Balance from "../components/Balance";
import FriendBalance from "../components/FriendBalance";

class Feed extends Component {
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

export default Feed;