import React, { Component } from 'react';
import { Card, Elevation, Intent, ProgressBar } from '@blueprintjs/core';
import { randomNumber } from '../Utility';

class FarmItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: this.props.progress,
            harvested: false,
            notified: false,
        };
        this.harvestAmount = randomNumber(this.props.stats.harvestMin, this.props.stats.harvestMax);
        this.progressTime = randomNumber(this.props.stats.timeMin, this.props.stats.timeMax)
    }

    componentDidMount() {
        const progressIncrement = 1.0 / (this.progressTime * 10);
        console.log(this.progressTime + 's');
        this.interval = setInterval(() => {
            this.setState({
                progress: this.state.progress + progressIncrement
            })
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let cardContent = (
            <React.Fragment>
                Type: {this.props.type}<br />
                Progress:
                <ProgressBar
                    intent={Intent.PRIMARY}
                    stripes={false}
                    value={this.state.progress}
                />
            </React.Fragment>
        );

        if (this.state.progress >= 1.0) {
            if (!this.state.notified) {
                clearInterval(this.interval);
                this.props.handleToast({
                    intent: 'primary',
                    message: this.props.type + ' done!',
                })
                this.setState({
                    notified: true
                })
            }
            cardContent = (
                <React.Fragment>{this.props.type} Complete!</React.Fragment>
            );
        }

        return (
            <Card
                className="farmItem"
                elevation={Elevation.TWO}
                interactive={this.state.progress >= 1.0}
                onClick={this.state.progress >= 1.0 ? () => this.props.handleHarvest(this.props.id, this.harvestAmount) : null}
            >
                {cardContent}
            </Card>
        )
    }
}

export default FarmItem;