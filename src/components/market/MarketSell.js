import React, { Component } from 'react';
import { Button, Card } from '@blueprintjs/core';

class MarketSell extends Component {
    sellItem = (type, value) => {
        this.props.handleInventoryChange('money', value);
        this.props.handleInventoryChange(type, -1);
    }

    render() {
        return (
            <Card
                className="marketSell"
                intent="1"
            >
                {Object.keys(this.props.inventory).map((key, index) => (
                    <p key={index}>
                        {key !== 'money' && (
                            <React.Fragment>
                                {key} ({this.props.inventory[key]}): ${sellValue[key].toFixed(2)} ea
                                <Button
                                    intent="danger"
                                    onClick={() => this.sellItem(key, sellValue[key])}
                                    disabled={this.props.inventory[key] === 0}
                                >Sell</Button>
                            </React.Fragment>
                        )}
                    </p>
                ))}
            </Card>
        )
    }
}

const sellValue = {
    corn: 2.50,
    wheat: 5.00,
    rye: 7.50,
    barley: 10.00,
    yeast: 0.25,
    usedBarrels: 25.00,
    newBarrels: 65.00,
}

export default MarketSell;