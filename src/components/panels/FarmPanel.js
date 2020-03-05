import React, { Component } from 'react';
import Farm from '../farm/Farm';
import { Button, ButtonGroup, Card, Elevation } from '@blueprintjs/core';
import { generateId } from '../Utility';

class FarmPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            farmItems: [],
        }
        this.handleHarvest = this.handleHarvest.bind(this);
    }

    plantSeed(seedType) {
        if (this.state.farmItems.length < maxFarmItems) {
            const farmItems = this.state.farmItems.slice();
            this.setState({
                farmItems: farmItems.concat([
                    {
                        id: generateId('farmItem'),
                        type: seedType,
                        progress: 0,
                    }
                ]),
            })
            this.props.handleInventoryChange('money', -seedPrices[seedType])
        }
    }

    handleHarvest(farmItemId, value) {
        const harvestedItem = this.state.farmItems.find(farmItem => farmItem.id === farmItemId);
        const farmItems = this.state.farmItems.filter(farmItem => farmItem.id !== farmItemId);
        this.setState({
            farmItems: farmItems,
        })
        this.props.handleInventoryChange(harvestedItem.type, value);
        this.props.handleToast({
            intent: 'success',
            message: 'Harvested ' + value + ' ' + harvestedItem.type + '(s)!',
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Farm:</h2>
                <div className="farm">
                    <Farm
                        farmItems={this.state.farmItems}
                        handleHarvest={this.handleHarvest}
                        handleToast={this.props.handleToast}
                    />
                    <Card className="farmPanelButtons" elevation={Elevation.ONE}>
                        <p>Plant seeds:</p>
                        <Button
                            className="farmPanelSeedButton"
                            large={true}
                            intent="success"
                            onClick={() => this.plantSeed("corn")}
                            disabled={this.state.farmItems.length >= maxFarmItems || this.props.inventory.money < seedPrices.corn}
                        >Corn</Button> (${seedPrices.corn.toFixed(2)})<br/>
                        <Button
                            className="farmPanelSeedButton"
                            large={true}
                            intent="success"
                            onClick={() => this.plantSeed("wheat")}
                            disabled={this.state.farmItems.length >= maxFarmItems || this.props.inventory.money < seedPrices.wheat}
                        >Wheat</Button> (${seedPrices.wheat.toFixed(2)})<br/>
                        <Button
                            className="farmPanelSeedButton"
                            large={true}
                            intent="success"
                            onClick={() => this.plantSeed("rye")}
                            disabled={this.state.farmItems.length >= maxFarmItems || this.props.inventory.money < seedPrices.rye}
                        >Rye</Button> (${seedPrices.rye.toFixed(2)})<br/>
                        <Button
                            className="farmPanelSeedButton"
                            large={true}
                            intent="success"
                            onClick={() => this.plantSeed("barley")}
                            disabled={this.state.farmItems.length >= maxFarmItems || this.props.inventory.money < seedPrices.barley}
                        >Barley</Button> (${seedPrices.barley.toFixed(2)})<br/>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

const maxFarmItems = 5;

const seedPrices = {
    corn: 2.50,
    wheat: 12.50,
    rye: 15.00,
    barley: 25.00
}

export default FarmPanel;