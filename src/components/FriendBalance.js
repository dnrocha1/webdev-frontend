import React, { Component } from 'react';

import { Segment } from 'semantic-ui-react'
import Avatar from './Avatar';

/**
 * This component displays the current user's balance with a friend.
 */


const FriendBalance = (props) => 
    props.expenses.map(exp => <Segment><Avatar size="30">{exp.value.user}</Avatar> {exp.value.user} : {exp.value.balance} </Segment>)

export default FriendBalance;