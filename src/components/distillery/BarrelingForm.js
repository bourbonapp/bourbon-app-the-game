import React, { Component } from 'react';
import { Button, FormGroup, NumericInput } from '@blueprintjs/core';

class Barrel {
    constructor() {

    }
}

class BarrelingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charLevel: 0,
            ageYears: 0,
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>Barrel a Fermented Mash</h2>
                <FormGroup
                    inline={true}
                    label="Char level"
                    labelFor="charLevel"
                >
                    <NumericInput
                        id="charLevel"
                        value={this.state.charLevel}
                        onValueChange={null}
                    />
                </FormGroup>
                <FormGroup
                    inline={true}
                    label="Years to age"
                    labelFor="ageYears"
                >
                    <NumericInput
                        id="ageYears"
                        value={this.state.ageYears}
                        onValueChange={null}
                    />
                </FormGroup>
                <p>Required amount of barrels: {'X'}</p>
                <Button
                    intent="success"
                    onClick={this.props.handleSave}
                >Start Barreling</Button>
                <Button
                    intent="danger"
                    onClick={this.props.handleClose}
                >Cancel</Button>
            </React.Fragment>
        );
    }
}

export default BarrelingForm;