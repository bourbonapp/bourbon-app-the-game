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
                    <Navbar.Heading>Money</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Corn</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Wheat</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Rye</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>Barley</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default NavBar;