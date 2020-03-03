import React, { Component } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import NavBar from './components/NavBar';
import FarmPanel from './components/panels/FarmPanel';
import DistilleryPanel from './components/panels/DistilleryPanel';
import MarketPanel from './components/panels/MarketPanel';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelId: "farm",
        };
        this.handlePanelChange = this.handlePanelChange.bind(this);
    }
    
    
    handlePanelChange(tabId) {
        this.setState({
            panelId: tabId,
        });
    }

    render() {
        let currentScreen = labelNames[farmKey];
        let open = true;
        return (
            <React.Fragment>
                <NavBar label={labelNames[this.state.panelId]} />
                <Tabs 
                    selectedTabId={this.state.panelId}
                    onChange={this.handlePanelChange}
                    vertical="true"
                >
                    {Object.keys(labelNames).map((key) => (
                        <Tab
                            id={key}
                            title={labelNames[key]}
                            panel={panels[key]}
                        />
                    ))}
                </Tabs>
            </React.Fragment>
        )
    }
}

const farmKey = "farm";
const distilleryKey = "distillery";
const marketKey = "market";

const labelNames = {
    farm: "Farm",
    distillery: "Distillery",
    market: "Market",
};

const panels = {
    farm: <FarmPanel />,
    distillery: <DistilleryPanel />,
    market: <MarketPanel />
}

export default Dashboard;