import React, { Component } from 'react';
import { Card, Elevation, Intent, ProgressBar } from '@blueprintjs/core';

class FarmItem extends Component {
    render() {
        return (
            <Card elevation={Elevation.TWO}>
                Type: {this.props.type}<br />
                Progress:
                <ProgressBar
                    intent={Intent.PRIMARY}
                    stripes={false}
                    value={this.props.progress}
                />
            </Card>
        )
    }
}

class Farm extends Component {
    render() {
        return (
            <Card elevation={Elevation.ONE}>
                {this.props.farmItems.map((farmItem) => (
                    <FarmItem type={farmItem.type} progress={farmItem.progress} />
                ))}
            </Card>
        )
    }
}

export default Farm;