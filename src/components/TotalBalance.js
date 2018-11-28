import React, { Component } from 'react';

import { Statistic, Icon, Segment } from 'semantic-ui-react';

/**
 * This component displays the user balance.
 */
class TotalBalance extends Component {
    render() {
        return (
            <Segment /*tertiary*/>

                <Statistic.Group widths='one'>
                    <Statistic>
                        <Statistic.Value>
                            <Icon name="usd" />
                            {/*<span style={{color:'red'}}>500,00</span>*/}
                            500,00
                        </Statistic.Value>
                        <Statistic.Label>Devendo</Statistic.Label>
                    </Statistic>
                </Statistic.Group>

            </Segment>
        );
    }
}

export default TotalBalance;