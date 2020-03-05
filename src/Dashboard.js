import React, { Component } from 'react';
import { Tab, Tabs, Toaster } from '@blueprintjs/core';
import NavBar from './components/NavBar';
import FarmPanel from './components/panels/FarmPanel';
import DistilleryPanel from './components/panels/DistilleryPanel';
import MarketPanel from './components/panels/MarketPanel';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelId: "farm",
            inventory: {
                corn: 100,
                wheat: 100,
                rye: 100,
                barley: 100,
                yeast: 100,
                newBarrels: 0,
                usedBarrels: 0,
                money: 1500,
            }
        };
        this.handlePanelChange = this.handlePanelChange.bind(this);
        this.handleInventoryChange = this.handleInventoryChange.bind(this);
        this.handleToast = this.handleToast.bind(this);
    }

    setToasterRef = (ref) => {
        this.toaster = ref;
    }

    handleToast(toast) {
        this.toaster.show(toast);
    }

    handlePanelChange(tabId) {
        this.setState({
            panelId: tabId,
        });
    }

    handleInventoryChange(inventoryKey, value) {
        let inventory = this.state.inventory;
        inventory[inventoryKey] += value;
        this.setState({
            inventory: inventory,
        });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar
                    label={labelNames[this.state.panelId]}
                    inventory={this.state.inventory}
                />
                <Tabs
                    selectedTabId={this.state.panelId}
                    onChange={this.handlePanelChange}
                    vertical="true"
                >
                    <Tab
                        id="farm"
                        title="Farm"
                        panel={<FarmPanel
                            inventory={this.state.inventory}
                            handleInventoryChange={this.handleInventoryChange}
                            handleToast={this.handleToast}
                        />}
                    />
                    <Tab
                        id="distillery"
                        title="Distillery"
                        panel={<DistilleryPanel
                            inventory={this.state.inventory}
                            handleInventoryChange={this.handleInventoryChange}
                        />}
                    />
                    <Tab
                        id="market"
                        title="Market"
                        panel={<MarketPanel
                            inventory={this.state.inventory}
                            handleInventoryChange={this.handleInventoryChange}
                        />}
                    />
                </Tabs>
                <Toaster ref={this.setToasterRef} />
            </React.Fragment>
        )
    }
}

const labelNames = {
    farm: "Farm",
    distillery: "Distillery",
    market: "Market",
};

export default Dashboard;