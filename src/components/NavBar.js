import React, { Component } from 'react';
import { Alignment, Navbar } from '@blueprintjs/core';

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        Current page: <strong>{this.props.label}</strong>
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>Money: ${this.props.inventory.money.toFixed(2)}</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Corn: {this.props.inventory.corn}</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Wheat: {this.props.inventory.wheat}</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Rye: {this.props.inventory.rye}</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Barley: {this.props.inventory.barley}</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Yeast: {this.props.inventory.yeast}</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default NavBar;