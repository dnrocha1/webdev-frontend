import React from 'react';
import { Segment, Card, Feed } from "semantic-ui-react";
import Avatar from "../components/Avatar";

{/*<Segment basic>
    <Avatar size='30'>{ props.username }</Avatar>
    <span>&nbsp;&nbsp;&nbsp;{ props.username }</span>
</Segment>*/}
const abs = value => Math.abs(value);

const UserCard = (props) => 

<Card>

    <Card.Content>
        <Feed>
            <Feed.Event>
            <Feed.Label>
                <Avatar size='30'>{ props.username }</Avatar>
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    { props.username }
                </Feed.Summary>
                <Feed.Event>
                    { props.message } R${ abs(props.value) }
                </Feed.Event>
            </Feed.Content>
            </Feed.Event>

        </Feed>
    </Card.Content>
    
</Card>

export default UserCard;