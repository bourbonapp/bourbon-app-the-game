import React, { Component } from 'react';
import Farm from '../farm/Farm';
import { Button, ButtonGroup, Card } from '@blueprintjs/core';

class FarmPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Farm:</h2>
                <div className="farm">
                    <Farm farmItems={farmItems} />
                    Plant:
                    <Card>
                        <ButtonGroup
                            fill={true}
                            large={true}
                            vertical={true}
                        >
                            <Button intent="success">Corn</Button>
                            <Button intent="success">Wheat</Button>
                            <Button intent="success">Rye</Button>
                            <Button intent="success">Barley</Button>
                        </ButtonGroup>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

const farmItems = [
    {type: "corn", progress: 0.5},
    {type: "corn", progress: 1},
    {type: "wheat", progress: 0.25},
    {type: "rye", progress: 0}
];

export default FarmPanel;