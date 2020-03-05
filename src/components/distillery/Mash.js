import React, { Component } from 'react';
import { Card } from '@blueprintjs/core';

class Mash extends Component {
    render() {
        return (
            <Card elevation="2">
                <p>{this.props.name} mash</p>
            </Card>
        )
    }
}

export default Mash;