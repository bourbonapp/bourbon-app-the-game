import React, { Component } from 'react';
import { Card, Elevation, Intent, ProgressBar } from '@blueprintjs/core';

class FarmItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: this.props.progress,
            harvested: false,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                progress: this.state.progress + 0.1
            })
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.state.progress >= 1.0 && !this.state.harvested) {
            clearInterval(this.interval);
            this.props.handleInventoryChange(this.props.type, 1);
            this.setState({
                harvested: true
            });
        }
        if (this.state.progress >= 1.0) {
            return (
                <Card elevation={Elevation.TWO}>
                    {this.props.type} Complete!
                </Card>
            );
        }
        return (
            <Card elevation={Elevation.TWO} >

                Type: {this.props.type}<br />
                Progress:
<ProgressBar
                    intent={Intent.PRIMARY}
                    stripes={false}
                    value={this.state.progress}
                />
            </Card >
        )
    }
}

class Farm extends Component {
    render() {
        return (
            <Card elevation={Elevation.ONE}>
                {this.props.farmItems.map((farmItem, index) => (
                    <FarmItem
                        key={index}
                        type={farmItem.type}
                        progress={farmItem.progress}
                        handleInventoryChange={this.props.handleInventoryChange}
                    />
                ))}
            </Card>
        )
    }
}

export default Farm;