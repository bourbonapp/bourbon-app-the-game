import React, { Component } from 'react';
import { Card, Button, Dialog, NumericInput, FormGroup } from '@blueprintjs/core';
import MashBill from '../distillery/MashBill';
import MashBillForm from '../distillery/MashBillForm';
import FermentingMashForm from '../distillery/FermentingMashForm';
import { generateId } from '../Utility';

class DistilleryPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mashBills: [],
            fermentingMash: [],
            showMashBillForm: false,
            showFermentingMashForm: false,
        }
        this.handleAddMashBill = this.handleAddMashBill.bind(this);
        this.handleSaveMashBill = this.handleSaveMashBill.bind(this);
        this.handleDeleteMashBill = this.handleDeleteMashBill.bind(this);
        this.handleAddFermentingMash = this.handleAddFermentingMash.bind(this);
    }

    handleAddMashBill() {
        this.setState({
            showMashBillForm: !this.state.showMashBillForm
        })
    }

    handleSaveMashBill(name, corn, wheat, rye, barley) {
        this.handleAddMashBill();
        const mashBills = this.state.mashBills.slice();
        this.setState({
            mashBills: mashBills.concat([{
                id: generateId('mashBill'),
                name: name,
                corn: corn / 100,
                wheat: wheat / 100,
                rye: rye / 100,
                barley: barley / 100
            }])
        });
    }

    handleDeleteMashBill(mashBillId) {
        const mashBills = this.state.mashBills.slice().filter(mashBill => mashBill.id !== mashBillId);
        this.setState({
            mashBills: mashBills
        })
    }

    handleAddFermentingMash() {
        this.setState({
            showFermentingMashForm: !this.state.showFermentingMashForm
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Distillery</h2>
                <div className="distillery">
                    <Card className="mashBills" elevation="1">
                        <h3>Mash bills:</h3>
                        <p>
                            {this.state.mashBills.length === 0 ? (
                                <React.Fragment>
                                    <p>No mash bills</p>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {this.state.mashBills.map((mashBill) => (
                                        <MashBill
                                            id={mashBill.id}
                                            key={mashBill.id}
                                            name={mashBill.name}
                                            corn={mashBill.corn}
                                            wheat={mashBill.wheat}
                                            rye={mashBill.rye}
                                            barley={mashBill.barley}
                                            handleDeleteMashBill={this.handleDeleteMashBill}
                                    />))}
                                </React.Fragment>
                            )}
                        </p>
                        <p>
                            <Button
                                intent="success"
                                onClick={this.handleAddMashBill}
                            >Add Mash Bill</Button>
                        </p>
                    </Card>
                    <Dialog className="mashBillDialog" isOpen={this.state.showMashBillForm} onClose={this.handleAddMashBill}>
                        <MashBillForm
                            handleClose={this.handleAddMashBill}
                            handleSave={this.handleSaveMashBill}
                        />
                    </Dialog>
                    <Card className="fermantationVats" elevation="1">
                        <h3>Fermantation Vats</h3>
                        {this.state.fermentingMash.length === 0 ? (
                            <p>Nothing fermenting.</p>
                        ) : (
                            <React.Fragment>

                            </React.Fragment>
                        )}
                        <Button intent="success" onClick={this.handleAddFermentingMash}>Ferment Mash</Button>
                    </Card>
                    <Dialog
                        className="fermentingMashDialog"
                        isOpen={this.state.showFermentingMashForm}
                        onClose={this.handleAddFermentingMash}
                    >
                        <FermentingMashForm
                            mashBills={this.state.mashBills}
                        />
                    </Dialog>
                </div>
            </React.Fragment>
        )
    }
}

export default DistilleryPanel;