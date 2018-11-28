import React from 'react'
import { Tab } from 'semantic-ui-react'

const Tabs = (props) => 
        <Tab menu={{ pointing: true, color: 'teal' }} panes={props.tabs.map(
                            tab => ({ menuItem: tab.menuItem, render: () => <Tab.Pane attached={false}>{tab.content}</Tab.Pane> }))
                    } />;

export default Tabs;