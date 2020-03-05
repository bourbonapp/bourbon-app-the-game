import React, { Component } from 'react';
import { Card, Button } from '@blueprintjs/core';

class MarketBuy extends Component {
    buyItem = (type, price) => {
        this.props.handleInventoryChange('money', -price);
        this.props.handleInventoryChange(type, 1);
    }

    render() {
        return (
            <Card
                className="marketBuy"
                intent="1"
            >
                <p>
                    Corn: ${prices.corn.toFixed(2)}
                    <Button
                        intent="success"
                        onClick={() => this.buyItem('corn', prices.corn)}
                        disabled={this.props.inventory.money < prices.corn}
                    >Buy</Button>
                </p>
                <p>
                    Wheat: ${prices.wheat.toFixed(2)}
                    <Button
                        intent="success"
                        onClick={() => this.buyItem('wheat', prices.wheat)}
                        disabled={this.props.inventory.money < prices.wheat}
                    >Buy</Button>
                </p>
                <p>
                    Rye: ${prices.rye.toFixed(2)}
                    <Button
                        intent="success"
                        onClick={() => this.buyItem('rye', prices.rye)}
                        disabled={this.props.inventory.money < prices.rye}
                    >Buy</Button>
                </p>
                <p>
                    Barley: ${prices.barley.toFixed(2)}
                    <Button
                        intent="success"
                        onClick={() => this.buyItem('barley', prices.barley)}
                        disabled={this.props.inventory.money < prices.barley}
                    >Buy</Button>
                </p>
                <p>
                    Yeast: ${prices.yeast.toFixed(2)}
                    <Button
                        intent="success"
                        onClick={() => this.buyItem('yeast', prices.yeast)}
                        disabled={this.props.inventory.money < prices.yeast}
                    >Buy</Button>
                </p>
            </Card>
        )
    }
}

const prices = {
    corn: 5.00,
    wheat: 7.50,
    rye: 10,
    barley: 15,
    yeast: 1.50,
    newBarrels: 75.00,
}

export default MarketBuy;