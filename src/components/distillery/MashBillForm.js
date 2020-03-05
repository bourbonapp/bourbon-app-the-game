import React, { Component } from 'react';
import { Button, FormGroup, NumericInput, InputGroup } from '@blueprintjs/core';

class MashBillForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            corn: 51,
            wheat: 0,
            rye: 0,
            barley: 0,
        }
        this.handleSave = this.handleSave.bind(this);
    }

    handleValueChange(type, value) {
        this.setState({
            [type]: value
        });
    }

    handleSave() {
        let name = this.state.name;
        if (name.length === 0) {
            name = 'New Mash Bill';
        }
        this.props.handleSave(name, this.state.corn, this.state.wheat, this.state.rye, this.state.barley);
    }

    calculateTotal() {
        return this.state.corn + this.state.wheat + this.state.rye + this.state.barley;
    }

    render() {
        let messagesToAdd = [];
        if (this.state.corn < 51) {
            messagesToAdd.concat(['Corn must be at least 51%']);
        }
        if (this.calculateTotal() > 100) {
            messagesToAdd.concat(['Your mash bill total is over 100%!']);
        }
        if (messagesToAdd.length > 0) {
            const messages = this.state.messages.slice();
            this.setState({
                messages: messages.concat(messagesToAdd)
            })
        }

        return (
            <React.Fragment>
                <h2>Add a new Mash Bill</h2>
                <FormGroup
                    inline={true}
                    label="Name"
                    labelFor="name"
                >
                    <InputGroup
                        id="name"
                        placeholder="New Mash Bill"
                        value={this.state.name}
                        onChange={(e) => this.handleValueChange('name', e.target.value)}
                    />
                </FormGroup>
                <FormGroup
                    inline={true}
                    label="Corn"
                    labelFor="corn"
                >
                    <NumericInput
                        id="corn"
                        value={this.state.corn}
                        onValueChange={(value) => this.handleValueChange('corn', value)}
                    />
                </FormGroup>
                <FormGroup
                    inline={true}
                    label="Wheat"
                    labelFor="wheat"
                >
                    <NumericInput
                        id="wheat"
                        placeholder="0.00"
                        value={this.state.wheat}
                        defaultValue="0"
                        onValueChange={(value) => this.handleValueChange('wheat', value)}
                    />
                </FormGroup>
                <FormGroup
                    inline={true}
                    label="Rye"
                    labelFor="rye"
                >
                    <NumericInput
                        id="rye"
                        placeholder="0.00"
                        value={this.state.rye}
                        defaultValue="0"
                        onValueChange={(value) => this.handleValueChange('rye', value)}
                    />
                </FormGroup>
                <FormGroup
                    inline={true}
                    label="Barley"
                    labelFor="barley"
                >
                    <NumericInput
                        id="barley"
                        placeholder="0.00"
                        value={this.state.barley}
                        defaultValue="0"
                        onValueChange={(value) => this.handleValueChange('barley', value)}
                    />
                </FormGroup>
                <p>
                    Total: {this.state.corn + this.state.wheat  + this.state.rye + this.state.barley}%
                </p>
                <p>
                    <span className="mashBillFormWarning">{this.calculateTotal() > 100 && 'Total above 100%!'}</span>
                    <span className="mashBillFormWarning">{this.state.corn < 51 && 'Corn must be at least 51%!'}</span>
                </p>
                <p>
                    <Button
                        intent="success"
                        onClick={this.handleSave}
                        disabled={this.calculateTotal() !== 100 || this.state.corn < 51}
                    >Save</Button>
                    <Button intent="danger" onClick={this.props.handleClose}>Cancel</Button>
                </p>
            </React.Fragment>
        )
    }
}

export default MashBillForm;