import React, { Component } from 'react';
import MarketBuy from '../market/MarketBuy';
import MarketSell from '../market/MarketSell';

class MarketPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Market</h2>
                <div className="market">
                    <MarketBuy
                        handleInventoryChange={this.props.handleInventoryChange}
                        inventory={this.props.inventory}
                    />
                    <MarketSell
                        handleInventoryChange={this.props.handleInventoryChange}
                        inventory={this.props.inventory}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default MarketPanel;