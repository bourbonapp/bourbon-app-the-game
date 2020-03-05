import React, { Component } from 'react';
import { FormGroup, HTMLSelect } from '@blueprintjs/core';

class FermentingMashForm extends Component {
    constructor(props) {
        super(props);
        const defaultMashBill = this.props.mashBills.length > 0 ? this.props.mashBills[0] : null;
        this.state = {
            mashBill: defaultMashBill
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>Ferment a mash bill</h2>
                <FormGroup
                    inline={true}
                    label="Mash Bill"
                    labelFor="mashBill"
                >
                    <HTMLSelect
                        value={this.state.mashBill.name}
                        options={this.props.mashBills.map(mashBill => mashBill.name)}
                    />
                </FormGroup>
            </React.Fragment>
        )
    }
}

export default FermentingMashForm;