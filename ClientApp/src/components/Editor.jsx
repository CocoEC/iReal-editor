import React from "react";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Stack from "react-bootstrap/Stack"
import Button from 'react-bootstrap/Button';


// Top navigation bar; may be moved in its own component file later
function TopNavBar() {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src="/img/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    iReal-editor
                </Navbar.Brand>
                <NavDropdown title="Menu">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    )
}

const Editor = () => {
    return (
        <div>
            <TopNavBar></TopNavBar>
            <h1>Editor - Work in progress</h1>
            <h2>This will hopefully work one day...</h2>

        </div>
    )
}

export default Editor;