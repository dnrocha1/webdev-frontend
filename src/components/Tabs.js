import React from 'react'
import { Tab } from 'semantic-ui-react'

const Tabs = (props) => 
        <Tab panes={props.tabs.map(
                            tab => ({ menuItem: tab.menuItem, render: () => <Tab.Pane>{tab.content}</Tab.Pane> }))
                    } />;

export default Tabs;