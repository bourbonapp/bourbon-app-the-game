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
        const corn = this.props.corn.toFixed(2);
        const wheat = this.props.wheat.toFixed(2);
        const rye = this.props.rye.toFixed(2);
        const barley = this.props.barley.toFixed(2);

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
                    <p>Corn: {corn}%</p>
                    <p>Wheat: {wheat}%</p>
                    <p>Rye: {rye}%</p>
                    <p>Barley: {barley}%</p>
                    <Button intent="primary" onClick={this.toggleMashbillDialog}>Close</Button>
                    <Button intent="danger" onClick={() => this.props.handleDeleteMashBill(this.props.id)}>Delete</Button>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default MashBill;