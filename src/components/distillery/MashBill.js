import React, { Component } from 'react';
import { Button, Card, Dialog } from '@blueprintjs/core';

class MashBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
        }
        this.toggleMashbillDialog = this.toggleMashbillDialog.bind(this);
    }

    toggleMashbillDialog() {
        this.setState({
            showDialog: !this.state.showDialog,
        })
    }

    render() {
        const corn = this.props.corn * 100;
        const wheat = this.props.wheat * 100;
        const rye = this.props.rye * 100;
        const barley = this.props.barley * 100;

        return (
            <React.Fragment>
                <Card
                    className="mashBill"
                    elevation="2"
                    interactive={true}
                    onClick={this.toggleMashbillDialog}
                >
                    <p><strong>{this.props.name}</strong></p>
                </Card>
                <Dialog
                    isOpen={this.state.showDialog}
                    onClose={this.toggleMashbillDialog}
                >
                    <h3>{this.props.name}</h3>
                    <p>Corn: {corn.toFixed(2)}%</p>
                    <p>Wheat: {wheat.toFixed(2)}%</p>
                    <p>Rye: {rye.toFixed(2)}%</p>
                    <p>Barley: {barley.toFixed(2)}%</p>
                    <Button intent="primary" onClick={this.toggleMashbillDialog}>Close</Button>
                    <Button intent="danger" onClick={() => this.props.handleDeleteMashBill(this.props.id)}>Delete</Button>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default MashBill;