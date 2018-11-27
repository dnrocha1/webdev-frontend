import React, { Component } from 'react';

import { Statistic, Icon } from 'semantic-ui-react';

/**
 * This component displays the user balance.
 */
class TotalBalance extends Component {
    render() {
        return (
            <Statistic.Group widths='one'>
                <Statistic>
                    <Statistic.Value>
                        <Icon name="usd" />
                        500,00
                    </Statistic.Value>
                    <Statistic.Label>Devendo</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        );
    }
}

export default TotalBalance;