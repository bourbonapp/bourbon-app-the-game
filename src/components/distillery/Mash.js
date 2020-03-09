import React, { Component } from 'react';
import { Card, Intent, ProgressBar } from '@blueprintjs/core';
import { randomNumber } from '../Utility';

class Mash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            distilled: false,
            notified: false,
            startDistill: false,
        }
        const averageTime = this.calculateTotal() / this.props.yeast;
        console.log(this.calculateTotal());
        console.log(this.props.yeast);
        console.log(averageTime);
        this.distillTime = randomNumber(Math.ceil(averageTime * 0.75), Math.ceil(averageTime * 1.25));

        this.handleInteractive = this.handleInteractive.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    setDistillTimer(amount) {
        console.log(amount + 's');
        const progressIncrement = 1.0 / (this.distillTime * 10);
        this.interval = setInterval(() => {
            this.setState({
                progress: this.state.progress + progressIncrement
            })
        }, 100);
    }

    componentDidMount() {
        if (this.props.fermenting) {
            this.setDistillTimer(this.distillTime);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    calculateTotal() {
        return (this.props.corn * MULTIPLIERS.corn) + (
            this.props.wheat * MULTIPLIERS.wheat) + (
                this.props.rye * MULTIPLIERS.rye) + (
                this.props.barley * MULTIPLIERS.barley)
    }

    handleInteractive() {
        if (this.props.fermenting) {
            return this.state.progress >= 1.0;
        }
        return !this.startDistill || this.state.progress >= 1.0;
    }

    handleOnClick() {
        if (this.props.fermenting) {
            if (this.state.progress >= 1.0) {
                this.props.handleFerment(this.props.id);
            }
        } else {
            if (!this.state.startDistill) {
                this.setState({
                    startDistill: true
                })
                this.setDistillTimer(10);
            }
        }
    }

    render() {
        let cardContent = null;
        if (this.props.fermenting) {
            if (this.state.progress < 1.0) {
                cardContent = (
                    <React.Fragment>
                        Progress:
                        <ProgressBar
                            intent={Intent.PRIMARY}
                            stripes={false}
                            value={this.state.progress}
                        />
                    </React.Fragment>
                );
            } else {
                if (!this.state.notified) {
                    clearInterval(this.interval);
                    this.props.handleToast({
                        intent: 'primary',
                        message: this.props.name + ' mash done!'
                    });
                    this.setState({
                        notified: true
                    })
                }
                cardContent = (
                    <React.Fragment>
                        <p>Done!</p>
                    </React.Fragment>
                )
            }
        } else {
            if (!this.state.startDistill) {
                cardContent = (
                    <React.Fragment>
                        <p>Click to start distilling!</p>
                        <p>Distill will take {'10'}s</p>
                    </React.Fragment>
                );
            } else {
                if (this.state.progress < 1.0) {
                    cardContent = (
                        <React.Fragment>
                            Progress:
                            <ProgressBar
                                intent={Intent.PRIMARY}
                                stripes={false}
                                value={this.state.progress}
                            />
                        </React.Fragment>
                    );
                } else {
                    cardContent = (
                        <React.Fragment>
                            <p>Distilling complete!</p>
                            <p>Click to barrel ({'X'} barrels)</p>
                        </React.Fragment>
                    );
                }
            }
        }

        return (
            <Card
                elevation="2"
                interactive={this.handleInteractive}
                onClick={this.handleOnClick}
            >
                <p>{this.props.name} mash</p>
                {cardContent}
            </Card>
        )
    }
}

const MULTIPLIERS = {
    corn: 1,
    wheat: 1.25,
    rye: 1.5,
    barley: 2,
}

export default Mash;