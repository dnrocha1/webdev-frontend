import React, { Component } from 'react';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';

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
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {expense.user}
                    </Typography>
                    <Typography color="textSecondary">
                        {expense.balance}
                    </Typography>
                </CardContent>
            </Card>
            </div>
        );
    }
}

export default FriendBalance;