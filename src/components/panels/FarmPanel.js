import React, { Component } from 'react';
import Farm from '../farm/Farm';
import { Button, ButtonGroup, Card } from '@blueprintjs/core';

class FarmPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            farmItems: [],
        }
        // this.plantSeed = this.plantSeed.bind(this);
    }

    plantSeed(seedType) {
        if (this.state.farmItems.length < maxFarmItems) {
            const farmItems = this.state.farmItems.slice();
            this.setState({
                farmItems: farmItems.concat([
                    { type: seedType, progress: 0 }
                ]),
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>Farm:</h2>
                <div className="farm">
                    <Farm
                        farmItems={this.state.farmItems}
                        handleInventoryChange={this.props.handleInventoryChange}
                    />
                    <Card>
                        <p>Plant seeds:</p>
                        <ButtonGroup
                            fill={false}
                            large={true}
                            vertical={true}
                        >
                            <Button
                                intent="success"
                                onClick={() => this.plantSeed("corn")}
                                disabled={this.state.farmItems.length >= maxFarmItems}
                            >Corn</Button>
                            <Button
                                intent="success"
                                onClick={() => this.plantSeed("wheat")}
                                disabled={this.state.farmItems.length >= maxFarmItems}
                            >Wheat</Button>
                            <Button
                                intent="success"
                                onClick={() => this.plantSeed("rye")}
                                disabled={this.state.farmItems.length >= maxFarmItems}
                            >Rye</Button>
                            <Button
                                intent="success"
                                onClick={() => this.plantSeed("barley")}
                                disabled={this.state.farmItems.length >= maxFarmItems}
                            >Barley</Button>
                        </ButtonGroup>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

const maxFarmItems = 5;

export default FarmPanel;