import React, { Component } from 'react';
import { FormGroup, HTMLSelect, Button, NumericInput } from '@blueprintjs/core';

class FermentingMashForm extends Component {
    constructor(props) {
        super(props);
        const defaultMashBill = this.props.mashBills.length > 0 ? this.props.mashBills[0] : null;
        this.state = {
            mashBill: defaultMashBill,
            corn: 0,
            wheat: 0,
            rye: 0,
            barley: 0,
            multiplier: 1.0
        }
        this.handleMashChange = this.handleMashChange.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    componentDidMount() {
        this.handleMashChange(this.state.mashBill);
    }

    calculateTotal() {
        return this.state.corn + this.state.wheat + this.state.rye + this.state.barley;
    }

    calculateYeast() {
        return Math.ceil(yeastPercentage * this.calculateTotal());
    }

    canAffordMash() {

        console.log(this.calculateTotal());
        console.log(minTotal);
        console.log('total: ' + parseInt(this.calculateTotal()) >= parseInt(minTotal));
        console.log('yeast: ' + this.calculateYeast() <= this.props.inventory.yeast);
        console.log('corn: ' + this.corn <= this.props.inventory.corn);
        console.log('wheat: ' + this.wheat <= this.props.inventory.wheat);
        console.log('rye: ' + this.rye <= this.props.inventory.rye);
        console.log('barley: ' + this.barley <= this.props.inventory.barley);
        let retVal = (this.calculateTotal() >= minTotal && this.calculateYeast() <= this.props.inventory.yeast &&
            this.corn <= this.props.inventory.corn && this.wheat <= this.props.inventory.wheat &&
            this.rye <= this.props.inventory.rye && this.barley <= this.props.inventory.barley);
        return retVal;
    }

    handleMashChange(newMashBill) {
        this.setState({
            mashBill: newMashBill !== null ? newMashBill : this.state.mashBill,
            corn: Math.ceil(this.state.mashBill.corn * this.state.multiplier),
            wheat: Math.ceil(this.state.mashBill.wheat * this.state.multiplier),
            rye: Math.ceil(this.state.mashBill.rye * this.state.multiplier),
            barley: Math.ceil(this.state.mashBill.barley * this.state.multiplier),
        })
    }

    handleMultiplierChange(value) {
        this.setState({
            multiplier: value,
            corn: Math.ceil(this.state.mashBill.corn * value),
            wheat: Math.ceil(this.state.mashBill.wheat * value),
            rye: Math.ceil(this.state.mashBill.rye * value),
            barley: Math.ceil(this.state.mashBill.barley * value),
        })
    }

    render() {
        const options = this.props.mashBills.length > 0 && this.props.mashBills.map((mashBill) => (
            { label: mashBill.name, value: mashBill }
        ));

        return (
            <React.Fragment>
                <h2>Ferment a mash bill</h2>
                <p>(Requires a minimum of {minTotal} ingredients total and {(yeastPercentage * 100).toFixed(2)}% yeast)</p>
                <FormGroup
                    inline={true}
                    label="Mash Bill"
                    labelFor="mashBill"
                >
                    <HTMLSelect
                        value={this.state.mashBill !== null ? this.state.mashBill.name : null}
                        options={options}
                        onChange={(e) => this.handleMashChange(e.target.mashBill)}
                    />
                </FormGroup>
                <FormGroup
                    inline={true}
                    label="Multiplier"
                    labelFor="multiplier"
                >
                    <NumericInput
                        id="multiplier"
                        value={this.state.multiplier}
                        onValueChange={(value) => (this.handleMultiplierChange(value))}
                    />
                </FormGroup>
                <p>Corn required: {this.state.corn} ({this.state.mashBill.corn}%)</p>
                <p>Wheat required: {this.state.wheat} ({this.state.mashBill.wheat}%)</p>
                <p>Rye required: {this.state.rye} ({this.state.mashBill.rye}%)</p>
                <p>Barley required: {this.state.barley} ({this.state.mashBill.barley}%)</p>
                <p>Yeast required: {this.calculateYeast()}</p>
                <p>Total ingredients used: {this.calculateTotal()}</p>
                {!this.canAffordMash && (
                    <p>Insufficient ingredients!</p>
                )}
                <Button
                    intent="success"
                    onClick={() => this.props.handleSave(
                        this.state.mashBill.name,
                        this.state.corn,
                        this.state.wheat,
                        this.state.rye,
                        this.state.barley,
                        this.calculateYeast()
                    )}
                //disabled={!this.canAffordMash()}
                >Start Fermenting</Button>
                <Button intent="danger" onClick={this.props.handleClose}>Cancel</Button>
            </React.Fragment>
        )
    }
}

const minTotal = 100;
const yeastPercentage = 0.25;

export default FermentingMashForm;