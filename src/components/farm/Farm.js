import React, { Component } from 'react';
import { Card, Elevation, } from '@blueprintjs/core';
import FarmItem from './FarmItem';

class Farm extends Component {
    render() {
        return (
            <Card className="farmPanelFarm" elevation={Elevation.ONE}>
                {this.props.farmItems.length > 0 ? this.props.farmItems.map((farmItem) => (
                    <FarmItem
                        key={farmItem.id}
                        id={farmItem.id}
                        type={farmItem.type}
                        progress={farmItem.progress}
                        stats={farmItemStats[farmItem.type]}
                        handleHarvest={this.props.handleHarvest}
                        handleToast={this.props.handleToast}
                    />
                )) : (
                    <React.Fragment>
                        Nothing being farmed!
                    </React.Fragment>
                )}
            </Card>
        )
    }
}

const farmItemStats = {
    corn: {
        harvestMin: 1,
        harvestMax: 3,
        timeMin: 3.0,
        timeMax: 10.0,
    },
    wheat: {
        harvestMin: 2,
        harvestMax: 5,
        timeMin: 6.0,
        timeMax: 12.0,
    },
    rye: {
        harvestMin: 1,
        harvestMax: 2,
        timeMin: 2.0,
        timeMax: 8.5,
    },
    barley: {
        harvestMin: 3,
        harvestMax: 10,
        timeMin: 8.5,
        timeMax: 17.5,
    },
}

export default Farm;